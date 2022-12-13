const mongoose = require('mongoose');
const uriClient = "mongodb://127.0.0.1:27017/admin"

mongoose.connect(uriClient)
.then(db=>console.log('Conectamos la base de datos '+db))
.catch(err=>console.log(err));

module.exports=mongoose;

