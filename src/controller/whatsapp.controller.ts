import { Request, Response } from "express";
import { sendWhatsAppAlertSchema} from "../validators/whatsapp.schema";
import { sendWhatsAppAlert } from "../services/whatsapp.service";
import { checkWhatsAppStatus } from "../services/whatsapp-status.service";

export async function sendAlertController(req: Request, res: Response) {
  // 1. Validação Zod
  const parsed = sendWhatsAppAlertSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      error: "VALIDATION_ERROR",
      issues: parsed.error.issues
    });
  }

  const data = parsed.data;

  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID!;
  const token = process.env.WHATSAPP_TOKEN!;

  // 2. Validação do status do WhatsApp
  const status = await checkWhatsAppStatus();

  if (status !== "ACTIVE") {
    return res.status(409).json({
      error: "WHATSAPP_NOT_READY",
      status,
      message: "Número do WhatsApp ainda não está ativo para envio"
    });
  }

  // 3. Envio da mensagem
  try {
    const result = await sendWhatsAppAlert(data);

    return res.json({
      success: true,
      result
    });
  } catch (err) {
    console.error(err);
    return res.status(502).json({
      error: "WHATSAPP_API_ERROR",
      message: "Erro ao enviar mensagem para o WhatsApp"
    });
  }
}
