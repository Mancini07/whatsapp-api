import { Router } from "express";
import { sendAlertController } from "../controller/whatsapp.controller";

const router = Router();

router.post("/alert", sendAlertController);

export default router;
