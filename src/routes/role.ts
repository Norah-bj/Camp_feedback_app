import { createRole, getAllRoles } from "../controller/roleController";

import { Router } from "express";

const roleRouter = Router();

roleRouter.post("/roles", createRole);
roleRouter.get("/roles", getAllRoles);
roleRouter.get("/roles/ping", (req, res) => {
  console.log("PING RECEIVED");
  res.send("pong");
});


export default roleRouter;