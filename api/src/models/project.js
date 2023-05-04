import { Schema, model } from 'mongoose';

const projectSchema = new Schema(
    {
        clientName: {
            type: String,
            required: true
        },
        value: {
            type: Number,
            required: true
        },
        department: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default model('users_test_kevinPatiño', projectSchema);
