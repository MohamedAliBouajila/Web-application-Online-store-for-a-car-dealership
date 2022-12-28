const { default: mongoose, Schema } = require("mongoose");

const schemaUser = new mongoose.Schema(
  {
    nom: {
      type: String,
      trim: true,
    },
      email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
      photo:{
      type:String,
    },
    role:{
      type:String, default:"user"
    }
  }, { writeConcern: { w: 'majority', j: true, wtimeout: 1000 } },
  { timestamps: true }
);
module.exports = mongoose.model("user", schemaUser);