import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    status: {
        type: String,
        enum: ['pending', 'in_progress', 'completed'],
        default: 'pending'
    },
    dueDate: {
        type: String,
        validate: {
            validator: function(v: string) {
                return /^\d{4}-\d{2}-\d{2}$/.test(v);
            },
            message: (props: { value: string }) => `${props.value} is not a valid date format (YYYY-MM-DD)`
        }
    }
});

const Task = mongoose.models.Task || mongoose.model('Task', taskSchema);

export default Task;