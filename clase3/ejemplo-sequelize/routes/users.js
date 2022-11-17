var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')
/* GET users listing. */
router.get('/', userController.listUsers);
router.post('/add', userController.add);
router.put('/update/:id',userController.update)
router.delete('/delete/:id',userController.del)

module.exports = router;
