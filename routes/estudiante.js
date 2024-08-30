const  express = require("express")
const controllerEstudiante = require("../controlers/estudiantes")
const router = express.Router()

// tenemos que  construir las rutas del CRUD


router.get("/",controllerEstudiante.getEstudiantes)

router.get("/:id",controllerEstudiante.getEstudiantePorId)
router.post("/",controllerEstudiante.create)//()=> console.log("post estudiante"))
router.put("/:id",controllerEstudiante.upDateEstudiantesPorId)
router.delete("/",()=> console.log("eliminar estudiante"))


module.exports = router