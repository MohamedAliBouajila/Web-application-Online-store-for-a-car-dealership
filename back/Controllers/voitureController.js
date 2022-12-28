const VoitureModel = require('../Models/voiture')

module.exports = {

    CreateVoiture: async function (request, result) {
        const newvoiture = {
          Marque: request.body.Marque,
          Vitesse: request.body.Vitesse,
          prix: request.body.prix,
          nombredeplace: request.body.nombredeplace,
          photo:request.file.filename,
          details: request.body.details,
        };
        await VoitureModel.create(newvoiture, (error, voiture) => {
          if (error) {
            result.status(500).json({
              message: error,
              status: 500,
            });
          } else {
            result.status(200).json({
              message: "Voiture is created",
              status: 200,
              data: voiture,
            });
          }
        });
      },
        GetAllVoiture: function (req,res){
            VoitureModel.find({}).exec((err,ListUsers)=>{
                if(err){
                    res.status(500).json({
                        message:"echec d'avoir la liste",
                        status : 500,
                    });
                }else{
                    res.status(200).json({
                        status:200,
                        message:"c'est la liste des car",
                        data:ListUsers
                    });
                }
            });
        },
        GetVoitureByID: function(req,res){
            VoitureModel.findOne({_id: req.params.id}).exec((err,voitureByid)=>{
                if(err){
                    res.status(500).json({
                        message:err.massage,
                        status:500,
                    });
                }else{
                    res.status(200).json({
                        status:200,
                        message:"car séléctionné par ID ! ",
                        data:voitureByid,
                    });
                }
            });
        }, 
        DeleteVoiture: function(req,res){
            VoitureModel.deleteOne({_id: req.params.id}).exec((err,voiture)=>{
                if(err){
                    res.status(500).json({
                        message:err.massage,
                        status:500,
                    });
                }else{
                    res.status(200).json({
                        status:200,
                        message:"car supprime !  ",
                        data:voiture,
                    });
                }
            });
        },
        UpdateVoiture: function(req,res){
            VoitureModel.updateOne({_id: req.params.id},req.body).exec((err,voitureUpdate)=>{
                if(err){
                    res.status(500).json({
                        message:err.massage,
                        status:500,
                    });
                }else{
                    res.status(200).json({
                        status:200,
                        message:"car modifié !  ",
                        data:voitureUpdate,
                    });
                }
            });
        }
      
    }