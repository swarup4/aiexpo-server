const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objectId = Schema.ObjectId;


const user = {
    _id: { type: objectId, auto: true },
    fname: String,
    lname: String,
    role: String,
    username: String,
    password: String,
    email: String,
    emailVerified: { type: Boolean, default: 0 },
    createdAt: Date,
    updatedAt: Date,
    status: { type: Boolean, default: 1 }
};
const userSchema = new Schema(user, { versionKey: false, timestamps: true });


module.exports = {
    Auth: mongoose.model("user", userSchema)
};