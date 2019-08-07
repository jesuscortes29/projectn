const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AsistenciasSchema = new Schema({
  asistencia: String,
  inasistencia: String,
  fecha_asistencia: String,

  id_Estudiantes:[
    {
      type: Schema.Types.ObjectId,
      ref: "Estudiantes"
    }
  ]
});

var Asistencias = mongoose.model("Asistencias", AsistenciasSchema);
module.exports = Asistencias;
