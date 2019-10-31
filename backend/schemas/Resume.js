const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SectionContent = new Schema({
    title: String,
    dates: String,
    content: [{ type: String }]
})
const Section = new Schema({
    title: String,
    sectionContent: [SectionContent]
})

const Resume = new Schema(
    {
        id: Number,
        name: String,
        sections: [Section]
    },
    { timestamps: true },
    { collection: 'resume' }
);

module.exports = mongoose.model("resume", Resume);