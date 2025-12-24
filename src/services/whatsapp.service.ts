import { whatsappClient } from "../client/whatsapp.client";
import { WhatsAppAlertInput } from "../types/whatsapp";
import { env } from "../config/env";

export async function sendWhatsAppAlert(data: WhatsAppAlertInput) {
  return whatsappClient.post(`${env.WHATSAPP_PHONE_NUMBER_ID}/messages`, {
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
  })
}