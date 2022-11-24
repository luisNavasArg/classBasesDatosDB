var express = require('express');
var router = express.Router();
const dueniosController = require('../controllers/dueniosController')
/* GET users listing. */
router.post('/add', dueniosController.add);
router.post('/addDireccion', dueniosController.addDireccion);

module.exports = router;
