const mongoose = require('mongoose');

const schema = mongoose.Schema;

const ninjaSchema = new schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    rank: {
        type: String,
        required: [true, 'rank is required']
    },
    available: {
        type: Boolean,
        default: false
    },
    latitude: {
        type: Number,
        required: [true, 'latitude is required'] 
    },
    longtude: {
        type: Number,
        required: [true, 'longtude is required']
    }
}, {timestamps: true});


const ninja = mongoose.model('ninja', ninjaSchema);
module.exports = ninja;