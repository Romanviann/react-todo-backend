import mongoose from 'mongoose';

interface IListItem extends Document {
    id: string;
    title: string;
    description: string;
    isCompleted: boolean;
    createdAt: Date;
    updatedAt: Date;
}

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

const ListItemModel = mongoose.model<IListItem>("list-item", ListItemSchema);
export default ListItemModel;