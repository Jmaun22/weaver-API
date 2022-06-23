const router = require('express').Router();
const trackingRoutes = require('./tracking-routes');

router.use('/tracking', trackingRoutes);

module.exports = router;