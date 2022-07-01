const router = require('express').Router();

const {
    getAllTracking,
    getOneTracking,
    createTracking,
} = require('../../controllers/tracking-controller.js');

// /api/tracking

router.route('/').get(getAllTracking).post(createTracking);
router.route('/:username').get(getOneTracking);

module.exports = router;