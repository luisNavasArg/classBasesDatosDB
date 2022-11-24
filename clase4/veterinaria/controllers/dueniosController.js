// const duenios = require("../models/duenios")
const db = require('../models/index')
const duenios = db.duenios;
const direcciones = db.direcciones;
module.exports={
    add:async(req,res)=>{
        let duenio={
            nombre:req.body.nombre,
            apellido:req.body.apellido,
            dni:req.body.dni,
            mascotas:null,
            id_direccion:null
        }
        try {
            let dataDuenio = await duenios.create(duenio)
            res.json(dataDuenio)
        } catch (error) {
            res.json({error:error})
        }
        
    },
    addDireccion:async(req,res)=>{
        let dni = req.body.dni;
        let data = await duenios.findOne({where:[{dni:dni}]});
        if(data==undefined){
            return res.status(400).json({msg:"No hay datos con ese dni"})
        }
        let id=data.id
        let direccion={
            id_duenio:id,
            calle:req.body.calle,
            altura:req.body.altura,
            piso:req.body.piso,
            depto:req.body.depto,
            ciudad:req.body.ciudad,
        }
        let miDireccion = await direcciones.create(direccion)
        res.json(miDireccion)
    }
    
}