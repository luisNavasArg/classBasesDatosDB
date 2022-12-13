// db.usuarios.insertOne({ name: "Juan" });
// db.usuarios.insertOne({ name: "Pedro" });
// db.usuarios.insertOne({ name: "Juanita" });
// db.usuarios.insertOne({ name: "Alan" });
// db.usuarios.insertOne({ name: "Alejandro" });

// db.usuarios.insertMany(
//     [
//         { name: "Alan" }, 
//         { name: "Leonardo" }, 
//         { name: "Jazmín" },
//         { name: "Nelly" }, 
//         { name: "Bart" }, 
//         { name: "Felix" }
//     ]);

// db.usuarios.deleteOne({name:"Felix"});
// db.usuarios.deleteMany({name:"Bart"},{name:"Juan"});

// db.usuarios.deleteMany({name:"Juanita"});

db.usuarios.updateMany({name:{$eq:"Jazmín"}},{$set:{last:"Suárez"}},{name:{$eq:"Alan"}},{$set:{last:"Suárez"}});

