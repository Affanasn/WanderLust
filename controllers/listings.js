const Listing = require('../models/listing');
const axios = require("axios");


module.exports.index = async (req, res) => {
    const { search, category } = req.query;
    let filter = {};

    if (category) {
        filter.category = category;
    }
    if (search) {
        filter.$or = [
                {
                    title: {
                        $regex: search,
                        $options: "i"
                    }
                },
                {
                    location: {
                        $regex: search,
                        $options: "i"
                    }
                },
                {
                    country: {
                        $regex: search,
                        $options: "i"
                    }
                },
                {
                    category: {
                        $regex: search,
                        $options: "i"
                    }
                }
            ]
    }

    const allListings = await Listing.find(filter);
    res.render("listings/index", { allListings, search, category });
};


module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
};


module.exports.showListing = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: {
                path: "author",
            }
        })
        .populate("owner");

    if (!listing) {
        req.flash("error", "Cannot find that listing!");
        return res.redirect("/listings");
    }
    console.log("Owner:", listing.owner);
    res.render("listings/show.ejs", { listing });
};


module.exports.createListing = async (req, res) => {
    let url = req.file.path;
    let filename = req.file.filename;
    const newListing = new Listing(req.body.listing);
    // Cloudinary Image
    newListing.image = { url, filename };
    newListing.owner = req.user._id;

    // Convert location to coordinates
    const address = `${newListing.location}, ${newListing.country}`.trim();
    const response = await axios.get(
        "https://nominatim.openstreetmap.org/search",
        {
            params: {
                q: address,
                format: "json",
                limit: 1
            },
            headers: {
                "User-Agent": "Wanderlust"
            }
        }
    );
    
    if (response.data.length === 0) {
        req.flash("error", "Location not found.");
        return res.redirect("/listings/new");
    }
    newListing.geometry = {
        type: "Point",
        coordinates: [
            parseFloat(response.data[0].lon),
            parseFloat(response.data[0].lat)
        ]
    };
    await newListing.save();
    req.flash("success", "Successfully created a new listing!");
    res.redirect(`/listings/${newListing._id}`);
};


module.exports.renderEditForm = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Cannot find that listing!");
        return res.redirect("/listings");
    }

    let orgImg = listing.image.url;
    orgImg = orgImg.replace("/upload", "/upload/w_250");
    res.render("listings/edit.ejs", { listing, orgImg });
};

module.exports.updateListing = async (req, res) => {
    const { id } = req.params;

    let listing = await Listing.findById(id);

    Object.assign(listing, req.body.listing);

    // Geocode the updated location
    const address = `${listing.location}, ${listing.country}`;

    const response = await axios.get(
        "https://nominatim.openstreetmap.org/search",
        {
            params: {
                q: address,
                format: "json",
                limit: 1
            },
            headers: {
                "User-Agent": "Wanderlust"
            }
        }
    );

    if (response.data.length > 0) {
        listing.geometry = {
            type: "Point",
            coordinates: [
                parseFloat(response.data[0].lon),
                parseFloat(response.data[0].lat)
            ]
        };
    }

    if (req.file) {
        listing.image = {
            url: req.file.path,
            filename: req.file.filename
        };
    }

    await listing.save();

    req.flash("success", "Successfully updated the listing!");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);

    req.flash("success", "Successfully deleted a listing!");
    res.redirect("/listings");
};