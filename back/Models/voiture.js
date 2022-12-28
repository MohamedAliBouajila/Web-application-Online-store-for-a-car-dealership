const {default:mongoose,Schema} = require("mongoose");
const {schema} = require("./user");

const SchemaVoiture = new mongoose.Schema({
    Marque:{
        type:String
    },
    Vitesse:{
        type:String
    },
    photo:{
        type:String
    },
    prix:{
        type:Number
    },
    nombredeplace:{
        type:Number
    },
    details:{
        type:String
    }

},
{timestamps:true}
);

module.exports = mongoose.model("voiture", SchemaVoiture);