import { Router } from "express";
import { signin, signup, profile } from "../controllers/auth.controller";
import { tokenValidation } from "../libs/validateToken";

const router: Router = Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/profile", tokenValidation, profile);

export default router;
