import { Router } from "express";
import signup from "../model/User.jd"

const router = Router();

router.post("/", signup);

export default router;
