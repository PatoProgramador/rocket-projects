import { Schema, model } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

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

projectSchema.plugin(mongoosePaginate);

export default model('users_test_kevinPatiño', projectSchema);