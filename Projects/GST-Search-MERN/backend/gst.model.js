import mongoose from "mongoose";

const gstSchema = new mongoose.Schema({
    gst_number: {
        type: String
    },
    busniess_name: {
        type: String,
        required: true
    },
    pan: {
        type: String,
        required: true
    },
    address: {
        type: String,
    },
    pincode: {
        type: String
    },
    entity_type: {
        type: String
    },
    nature_of_busniess: {
        type: String
    },
    department_code: {
        type: String
    },
    registration_type: {
        type: String
    },
    registration_date: {
        type: Date,
        default: Date.now()
    }
})

export const GST = mongoose.model("GST", gstSchema);