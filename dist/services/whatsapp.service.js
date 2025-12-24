"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendWhatsAppAlert = sendWhatsAppAlert;
const whatsapp_client_1 = require("../client/whatsapp.client");
const env_1 = require("../config/env");
async function sendWhatsAppAlert(data) {
    return whatsapp_client_1.whatsappClient.post(`${env_1.env.WHATSAPP_PHONE_NUMBER_ID}/messages`, {
        messaging_product: "whatsapp",
        to: data.to,
        type: "template",
        template: {
            name: "dev_pt_diagnostic_alert",
            language: { code: "pt_BR" },
            components: [
                {
                    type: "body",
                    parameters: [
                        { type: "text", text: data.diagnostico },
                        { type: "text", text: data.ativo },
                        { type: "text", text: data.unidade },
                        { type: "text", text: data.recomendacao }
                    ]
                }
            ]
        }
    });
}
//# sourceMappingURL=whatsapp.service.js.map