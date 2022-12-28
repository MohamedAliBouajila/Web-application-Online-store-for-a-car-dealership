const {default:mongoose,Schema} = require("mongoose");
const {schema} = require("./user","./voiture");

const SchemaCommande = new mongoose.Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"user"
      },
      voiture:{
        type:Schema.Types.ObjectId,
        ref:"voiture"
      }
},
{timestamps:true}
);

module.exports = mongoose.model("commande", SchemaCommande);