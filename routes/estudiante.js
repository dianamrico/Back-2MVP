const  express = require("express")
const controllerEstudiante = require("../controlers/estudiantes")
const router = express.Router()

// tenemos que  construir las rutas del CRUD


router.get("/",controllerEstudiante.getEstudiantes)

router.get("/:id",()=> console.log("leer estudiante usando el ID"))
router.post("/",controllerEstudiante.create)//()=> console.log("post estudiante"))
router.patch("/",()=> console.log("editar estudiante"))
router.delete("/",()=> console.log("eliminar estudiante"))


module.exports = router