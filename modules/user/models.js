const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objectId = Schema.ObjectId;


const user = {
    _id: { type: objectId, auto: true },
    name: String,
    isAdmin: Boolean,
    email: String,
    password: String,
    gender: String,
    status: { type: Boolean, default: 1 }
};
const userSchema = new Schema(user, { versionKey: false, timestamps: true });


module.exports = {
    Auth: mongoose.model("user", userSchema)
};