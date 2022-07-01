const router = require('express').Router();
const { Tracking } = require('../models');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
    return res.sendFile('Wrong route!');
});

module.exports = router;




