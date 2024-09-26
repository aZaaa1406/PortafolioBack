import { Router } from "express";
import ping from "../controllers/pingController.js"
import login from "../controllers/loginController.js";

const router = Router();

router.get('/ping', ping)

router.post('/login', login)

export default router;