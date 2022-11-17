const {alumno} = require('../models/index')
module.exports={
    listUsers:async(req,res)=>{
        try {
            let users = await alumno.findAll();
            return res.json(users)
        } catch (error) {
            return res.json(error)
        }
    },
    add:async (req,res)=>{
        let info = req.body;
        if (info.nombre=="") {
            return res.status(300)
            .json(
                {mgs:"El campo de Nombre no puede estar vacío"}
                )
        }else if (info.apellido=="") {
            return res.status(300)
            .json(
                {mgs:"El campo de Apellido no puede estar vacío"}
                )
        }else if (info.aula=="") {
            return res.status(300)
            .json(
                {mgs:"El campo de Aula no puede estar vacío"}
                )
        }else if (info.curso=="") {
            return res.status(300)
            .json(
                {mgs:"El campo de curso no puede estar vacío"}
                )
        }
        let data = await alumno.create(info)
        return res.json(data)
    },
    update:(req,res)=>{
        let id = req.params.id;
        let {nombre,apellido,aula,curso} = req.body;
        if (nombre=="") {
            return res.status(300)
            .json(
                {mgs:"El campo de Nombre no puede estar vacío"}
                )
        }else if (apellido=="") {
            return res.status(300)
            .json(
                {mgs:"El campo de Apellido no puede estar vacío"}
                )
        }else if (aula=="") {
            return res.status(300)
            .json(
                {mgs:"El campo de Aula no puede estar vacío"}
                )
        }else if (curso=="") {
            return res.status(300)
            .json(
                {mgs:"El campo de curso no puede estar vacío"}
                )
        }
        alumno.update(
            {
              nombre,apellido,aula,curso
            },
            {
              where:[
                {id:id}
              ]
            }
          )
          .then(result=>{return res.status(200).json(result)})
          .catch(error=>{return res.status(500).json(error)})
    },
    del:(req,res)=>{
        let id = req.params.id;
        alumno.destroy({where:[{id:id}]})
        .then((result)=>{return res.status(200).json({status:"OK"})})
        .catch(error=>{return res.status(500).json(error)})
    }

    
}