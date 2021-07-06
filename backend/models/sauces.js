const mongoose = require("mongoose");
const validate = require("mongoose-validator");

const sauceSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        validate: [
            validate({
                validator: "matches",
                arguments: /^[@&()_$£`+=\?#]+$/,
                message: "Le champ ne doit pas contenir de caractères spéciaux",
            }),
        ],
    },
    manufacturer: {
        type: String,
        required: true,
        validate: [
            validate({
                validator: "matches",
                arguments: /^[@&()_$£`+=\?#]+$/,
                message: "Le champ ne doit pas contenir de caractères spéciaux",
            }),
        ],
    },
    description: { type: String, required: true },
    mainPepper: {
        type: String,
        required: true,
        validate: [
            validate({
                validator: "matches",
                arguments: /^[@&()_$£`+=\?#]+$/,
                message: "Le champ ne doit pas contenir de caractères spéciaux",
            }),
        ],
    },
    imageUrl: { type: String, required: true },
    heat: { type: Number, required: true },
    likes: { type: Number, required: true },
    dislikes: { type: Number, required: true },
    usersLiked: { type: [String], required: true },
    usersDisliked: { type: [String], required: true },
});

module.exports = mongoose.model("Sauce", sauceSchema);
