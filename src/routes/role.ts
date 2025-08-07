import { createRole, getAllRoles } from "../controller/roleController";

import { Router } from "express";

const roleRouter = Router();

roleRouter.post("/roles", createRole);
roleRouter.get("/roles", getAllRoles);

export default roleRouter;