
import { mongoose } from 'mongoose';
const todoShema = mongoose.Schema({
    title: {
        type: String,
        require: true,
        unique: true
    },
    status: {
        type: String,
        default: "todo",
        enum: ["todo", "in Progress", "completed"]
    }
})
export const todoModel = mongoose.models.Todo || mongoose.model('Todo', todoShema);

