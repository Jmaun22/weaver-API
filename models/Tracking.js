const { Schema, model } = require('mongoose');

// const dateFormat = require('../utils/dateFormat');

const trackingSchema = new Schema(

    {
        mousehover: {
            type: String,
            require: true
        },
        // createAt: {
        //     type: Date,
        //     default: Date.now,
        //     get: timestamp => dateFormat(timestamp)
        // }
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

const Tracking = model('Tracking', trackingSchema);

module.exports = Tracking;