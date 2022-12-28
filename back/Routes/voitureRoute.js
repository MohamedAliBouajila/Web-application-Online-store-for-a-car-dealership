const routevoiture = require("express").Router();

const voitureController = require("../Controllers/voitureController");

const upload = require("../middlewares/upload");

routevoiture.post("/create",upload.single("photo"),voitureController.CreateVoiture);

routevoiture.get("/view",voitureController.GetAllVoiture);

routevoiture.get("/getvoiture/:id",voitureController.GetVoitureByID);

routevoiture.delete("/deletevoiture/:id",voitureController.DeleteVoiture);

routevoiture.put("/update/:id",voitureController.UpdateVoiture);


module.exports = routevoiture