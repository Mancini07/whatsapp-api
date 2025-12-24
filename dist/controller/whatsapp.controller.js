"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendAlertController = sendAlertController;
const whatsapp_schema_1 = require("../validators/whatsapp.schema");
const whatsapp_service_1 = require("../services/whatsapp.service");
const whatsapp_status_service_1 = require("../services/whatsapp-status.service");
async function sendAlertController(req, res) {
    // 1. Validação Zod
    const parsed = whatsapp_schema_1.sendWhatsAppAlertSchema.safeParse(req.body);
    if (!parsed.success) {
        return res.status(400).json({
            error: "VALIDATION_ERROR",
            issues: parsed.error.issues
        });
    }
    const data = parsed.data;
    const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
    const token = process.env.WHATSAPP_TOKEN;
    // 2. Validação do status do WhatsApp
    const status = await (0, whatsapp_status_service_1.checkWhatsAppStatus)();
    if (status !== "ACTIVE") {
        return res.status(409).json({
            error: "WHATSAPP_NOT_READY",
            status,
            message: "Número do WhatsApp ainda não está ativo para envio"
        });
    }
    // 3. Envio da mensagem
    try {
        const result = await (0, whatsapp_service_1.sendWhatsAppAlert)(data);
        return res.json({
            success: true,
            result
        });
    }
    catch (err) {
        console.error(err);
        return res.status(502).json({
            error: "WHATSAPP_API_ERROR",
            message: "Erro ao enviar mensagem para o WhatsApp"
        });
    }
}
//# sourceMappingURL=whatsapp.controller.js.map