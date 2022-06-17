const router = require('express').Router();

const {
    getAllTracking
} = require('../../controllers/tracking-controller');

// /api/tracking

router.route('/').get( getAllTracking);

module.exports = router;