const commande = require('../Models/commande');

module.exports = {

    CreateCommandes: function (request, result) {
        const newCommande = {

            user : request.body.user,
            voiture: request.body.voiture,
        //    nom: request.body.nom,
        //    email: request.body.email,
        //     password: request.body.password,
        };
        commande.create(newCommande, (error, commande) => {
            if (error) {
                result.status(500).json({
                    massage: error,
                    status: 500,
                });
            }
            else {
                result.status(200).json({
                    message: "commande is created",
                    status: 200,
                    data: commande,
                });
            }
        });
        },
        GetAllCommandes: function (req,res){
             // commande.findOne({_id: req.params.id}).exec((err,commandeByid)
            commande.find({})
            .populate("voiture")
            .populate("user")
            .exec((err,Listcommandes)=>{
                if(err){
                    res.status(500).json({
                        message:"echec d'avoir la liste",
                        status : 500,
                    });
                }else{
                    res.status(200).json({
                        status:200,
                        message:"c'est la liste des commande",
                        data:Listcommandes,
                    });
                }
            });
        },
        GetCommandesByID: function(req,res){
            commande.findOne({_id: req.params.id})
            .populate("voiture")
            .populate("user")
            .exec((err,commandeByid)=>{
                if(err){
                    res.status(500).json({
                        message:err.massage,
                        status:500,
                    });
                }else{
                    res.status(200).json({
                        status:200,
                        message:"commande séléctionné par ID ! ",
                        data:commandeByid,
                    });
                }
            });
        },
        // GetCommandesByName:function(req,res){
        //     commande.find({email:req.params.email})
        //     .populate("voiture")
        //     .populate("user")
        //     .exec((err,commandeByNom)=>{
        //         if(err){
        //             res.status(500).json({
        //                 menubar:err.message,
        //                 status:500,
        //             });
        //         }else{
        //             res.status(200).json({
        //                 status:200,
        //                 message:"commande selected by username",
        //                 data:commandeByNom,
        //             })
        //         }
        //     })
        // }
        // ,
        GetCommandesByName:function(req,res)
{
    commande.find({nom:req.params.nom})
    .populate("user")
    .populate("voiture")
    .exec((err,commandebynom)=>{
    if(err){
        res.status(500).json({
            message:err.message,
            status:500
        })
        }
        else{
            res.status(200).json({
                message:"commande selectionne par nom d'utilisateur",
                status:200,
                data:commandebynom,
            })
        }
    })
}
,
        DeleteCommandes: function(req,res){
            commande.deleteOne({_id: req.params.id}).exec((err,commande)=>{
                if(err){
                    res.status(500).json({
                        message:err.massage,
                        status:500,
                    });
                }else{
                    res.status(200).json({
                        status:200,
                        message:"commande supprime !  ",
                        data:commande,
                    });
                }
            });
        },
        UpdateCommandes: function(req,res){
            commande.updateOne({_id: req.params.id},req.body).exec((err,commandeUpdate)=>{
                if(err){
                    res.status(500).json({
                        message:err.massage,
                        status:500,
                    });
                }else{
                    res.status(200).json({
                        status:200,
                        message:"commande modifié !  ",
                        data:commandeUpdate,
                    });
                }
            });
        }
      


    }