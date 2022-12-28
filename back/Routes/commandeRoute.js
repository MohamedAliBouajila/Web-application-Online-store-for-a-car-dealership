const routecommande = require("express").Router();

const commandeController = require("../Controllers/commandeController");

routecommande.post("/create",commandeController.CreateCommandes);

routecommande.get("/view",commandeController.GetAllCommandes);

routecommande.get("/getcommande/:id",commandeController.GetCommandesByID);

routecommande.get("/getallcommandes",commandeController.GetAllCommandes);

routecommande.get("/getcommandebyname/:nom",commandeController.GetCommandesByName);

routecommande.delete("/deletecommande/:id",commandeController.DeleteCommandes);

routecommande.put("/update/:id",commandeController.UpdateCommandes);




module.exports = routecommande