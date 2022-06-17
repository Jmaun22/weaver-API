const { Tracking } = require('../models');

const trackingController = {


    getAllTracking(req, res) {
        Tracking.find()
        .select('-__v')
        .then((dbTackedData) => {
            res.json(dbTackedData);

        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },


 
};

module.exports = trackingController;