const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListadosSchema = new Schema({
  fecha: Number,
  id_Materias:[
    {
      type: Schema.Types.ObjectId,
      ref: "Materias"
    }
  ],

  id_Profesores:[
    {
      type: Schema.Types.ObjectId,
      ref: "Profesores"
    }
  ]
});

var Listados = mongoose.model("Listados", ListadosSchema);
module.exports = Listados;
