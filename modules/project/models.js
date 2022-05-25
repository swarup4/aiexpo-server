const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objectId = Schema.ObjectId;


const project = {
    _id: { type: objectId, auto: true },
    name: String,
    description: String,
    type: String,
    file: String,
    status: { type: Boolean, default: 1 }
};
const projectSchema = new Schema(project, { versionKey: false, timestamps: true });

module.exports = mongoose.model("project", projectSchema);