const Estudiante = require("../models/estudiante")

const controllerEstudiante = {
    create: async (req,res)=>{
        try {
            console.log(req.body)
            await Estudiante.create({
                nombre: req.body.nombre,
                materias: req.body.materias,
                asistencia: req.body.asistencia,
                tareas:req.body.tareas
            })
            res.status(201).send("Estudiante creado")
        } catch (error) {
            return res.status(500).send(error.message)
        }
    },

    getEstudiantes : async(req,res)=>{
        try {
           const estudiante  = await Estudiante.find({})
           res.json(estudiante).status(200)
        } catch (error) {
            return res.status(500).send(error.message)
        }
    },

    getEstudiantePorId : async(req,res)=>{
        try {
            const {id} = req.params
            const estudiante = estudiante.findById(id)
            .then(res.json(estudiante).estatus(200))
        } catch (error) {
            return res.status(500).send(error.message)
        }
    },
    upDateEstudiantesPorId : async (req,res)=>{
        try {
           const {id} = req.params
           await Estudiante.findByIdAndUpdate(id,{
                nombre: req.body.nombre,
                materias: req.body.materias,
                asistencia: req.body.asistencia,
                tareas:req.body.tareas
           })
           res.status(201).send("Estudiante actualizado")
        } catch (error) {
            return res.status(500).send(error.message)
        }
    },
    deleteEstudiantePorId : async (req,res)=>{
        try {
            const {id} = req.params
            await Estudiante.findByIdAndDelete(id)
            res.status(204).send("Estudiante eliminado")
        } catch (error) {
            return res.status(500).send(error.message)
        }
    }
}

module.exports = controllerEstudiante