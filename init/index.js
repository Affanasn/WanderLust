const mongoose = require("mongoose");
const axios = require("axios");

const Listing = require("../models/listing.js");
const initData = require("./data.js");

console.log("init/index.js started");

// Connect to MongoDB
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
    console.log("MongoDB connection established");
}

// Initialize Database
const initDB = async () => {
    // Delete old listings
    await Listing.deleteMany({});
    console.log("Old listings deleted");

    const listingsWithOwner = [];

    for (let obj of initData.listings) {
        const address = `${obj.location}, ${obj.country}`;

        try {
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
                obj.geometry = {
                    type: "Point",
                    coordinates: [
                        parseFloat(response.data[0].lon),
                        parseFloat(response.data[0].lat)
                    ]
                };

                console.log(`✔ ${address}`);
            } else {
                console.log(`✖ Location not found: ${address}`);
            }
        } catch (err) {
            console.log(`✖ Error geocoding: ${address}`);
        }

        listingsWithOwner.push({
            ...obj,
            owner: "6a5de4e090aca4bd7a898b5f"
        });

        // Small delay so Nominatim isn't flooded with requests
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

    await Listing.insertMany(listingsWithOwner);

    console.log("Database initialized successfully!");
};

// Run everything
main()
    .then(() => initDB())
    .then(() => {
        console.log("Done!");
        mongoose.connection.close();
    })
    .catch(err => {
        console.log(err);
    });