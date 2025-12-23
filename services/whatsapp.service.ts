import axios from "axios";

interface WhatsAppAlertParams {
  phoneNumberId: string;
  token: string;
  to: string;
  diagnostico: string;
  ativo: string;
  unidade: string;
  recomendacao?: string;
}

export async function sendWhatsAppAlert({
  phoneNumberId,
  token,
  to,
  diagnostico,
  ativo,
  unidade,
  recomendacao
}: WhatsAppAlertParams): Promise<void> {
  await axios.post(
    `https://graph.facebook.com/v22.0/${phoneNumberId}/messages`,
    {
      messaging_product: "whatsapp",
      to,
      type: "template",
      template: {
        name: "dev_pt_diagnostic_risk",
        language: { code: "pt_BR" },
        components: [
          {
            type: "body",
            parameters: [
              { type: "text", text: diagnostico }, // {{1}}
              { type: "text", text: ativo },   // {{2}}
              { type: "text", text: unidade },  // {{3}}
              { type: "text", text: recomendacao}, // {{4}}
            ]
          }
        ]
      }
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }
  );
}