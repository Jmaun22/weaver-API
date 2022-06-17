const router = require('express').Router();

const {
    getAllTracking,
    createTracking,
} = require('../../controllers/tracking-controller.js');

// /api/tracking

router.route('/').get( getAllTracking).post(createTracking);

module.exports = router;