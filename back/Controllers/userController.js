const User = require('../Models/user')
const jwt = require("jsonwebtoken")
module.exports = {
    CreateUser: function (request, result) {
        const newUser = {
           // ...request.body
            nom: request.body.nom,
            email: request.body.email,
            password: request.body.password,
            role: request.body.role,
            photo: request.file.filename,
        };
        User.create(newUser, (error, user) => {
            if (error) {
                result.status(500).json({
                    massage: error,
                    status: 500,
                });
            }
            else {
                result.status(200).json({
                    message: "user is created",
                    status: 200,
                    data: user,
                });
            }
        });
        },
        GetAllUsers: function (req,res){
            User.find({}).exec((err,ListUsers)=>{
                if(err){
                    res.status(500).json({
                        message:"echec d'avoir la liste",
                        status : 500,
                    });
                }else{
                    res.status(200).json({
                        status:200,
                        message:"c'est la liste des utilisateur",
                        data:ListUsers
                    });
                }
            });
        },
        GetUserByID: function(req,res){
            User.findOne({_id: req.params.id}).exec((err,userByid)=>{
                if(err){
                    res.status(500).json({
                        message:err.massage,
                        status:500,
                    });
                }else{
                    res.status(200).json({
                        status:200,
                        message:"utilisateur séléctionné par ID ! ",
                        data:userByid,
                    });
                }
            });
        }, 
        DeleteUser: function(req,res){
            User.deleteOne({_id: req.params.id}).exec((err,user)=>{
                if(err){
                    res.status(500).json({
                        message:err.massage,
                        status:500,
                    });
                }else{
                    res.status(200).json({
                        status:200,
                        message:"utilisateur supprime !  ",
                        data:user,
                    });
                }
            });
        },
        UpdateUser: function(req,res){
            User.updateOne({_id: req.params.id},req.body).exec((err,userUpdate)=>{
                if(err){
                    res.status(500).json({
                        message:err.massage,
                        status:500,
                    });
                }else{
                    res.status(200).json({
                        status:200,
                        message:"utilisateur modifié !  ",
                        data:userUpdate,
                    });
                }
            });
        },
        Login: async function (req, res) {
            const SECRET = "medali";
            try {
              // 1 ere etape verifier email et compare password
              const { email, password } = req.body;
              const user = await User.findOne({ email });
              if (!user) {
                return res
                  .status(404)
                  .json({ status: 404, message: "email not found !" });
              }
                  // 2 eme etape creation de token
                const token = jwt.sign(
                  {
                    id: user._id,
                    user: user,
                  },
                  SECRET,
                  { expiresIn: "7 days" }
                          );
                const result = {
                  email: user.email,
                  user: user,
                  token: token,
                  expiresIn: 7,
                };
                return res.status(200).json({
                  ...result,
                  message: "Connecté.",
                  success: true,
                });
            } catch (error) {
              res.status(404).json({ status: 404, message: error.message });
            }
          }  
    }