const mongoose = require("mongoose")

const RestaurentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 5,
    },
    location: {
        type: String,
        required: true,
        min: 10,
    },
    telephone: {
        type: String,
        required: true,
        min: 8,
    },
    img: {
        type: String,
        required: true,
    },
    review: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model("Restaurent", RestaurentSchema)