import { registerUser} from "../controller/userController";
import { Router } from "express";

const router = Router();

router.post("/auth/register", registerUser);

export default router;