const routeuser = require("express").Router();

const userController = require("../Controllers/userController");

const upload = require("../middlewares/upload");

routeuser.post("/create",upload.single("photo"),userController.CreateUser);

routeuser.get("/view",userController.GetAllUsers);

routeuser.get("/getuser/:id",userController.GetUserByID);

routeuser.delete("/deleteuser/:id",userController.DeleteUser);

routeuser.post("/login",userController.Login)

routeuser.put("/update/:id",userController.UpdateUser);


module.exports = routeuser