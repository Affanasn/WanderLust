const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

let listingSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    image: {
        filename: {
            type: String,
        },
        url: {
            type: String,
        }
    },

    price: {
        type: Number,
        required: true
    },

    category: {
        type: String,
        enum: [
            "Trending",
            "Room",
            "Iconic Cities",
            "Mountain",
            "Castles",
            "Amazing Pools",
            "Camping",
            "Farms",
            "Arctic",
            "Domes",
            "Boat"
        ],
        default: "Trending"
    },

    location: {
        type: String,
    },

    country: {
        type: String,
    },

    geometry: {
        type: {
            type: String,
            enum: ["Point"],
            default: "Point"
        },
        coordinates: {
            type: [Number],
            default: [0, 0]
        }
    },

    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ],

    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

});

listingSchema.post("findOneAndDelete", async (listing) => {
    if (listing) {
        await Review.deleteMany({ _id: { $in: listing.reviews } });
    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;