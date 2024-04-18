import mongoose from 'mongoose';

const ListItemSchema = new mongoose.Schema({
    id: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true
})

const ListItemModel = mongoose.model("list-item", ListItemSchema);

module.exports = ListItemModel;