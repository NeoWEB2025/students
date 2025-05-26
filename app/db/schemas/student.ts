import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    group: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    birthday: {
        type: String,
        validate: {
            validator: function(v: string) {
                return /^\d{4}-\d{2}-\d{2}$/.test(v);
            },
            message: (props: { value: string }) => `${props.value} is not a valid date format (YYYY-MM-DD)`
        }
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active',
    },
},
{
    statics: {
        findByName(name: string) {
            return this.find({
                $or: [
                    { firstName: { $regex: name, $options: 'i' } },
                    { lastName: { $regex: name, $options: 'i' } }
                ]
            });
        }
    },
    toJSON: { getters: true },
    toObject: { getters: true }
}
);

const Student = mongoose.models.Student || mongoose.model('Student', studentSchema);

export default Student;