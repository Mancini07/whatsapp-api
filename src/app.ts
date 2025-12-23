import "dotenv/config";
import { sendWhatsAppAlert } from "../services/whatsapp.service";

async function main() {

  await sendWhatsAppAlert({
    phoneNumberId: process.env.WHATSAPP_PHONE_NUMBER_ID!,
    token: process.env.WHATSAPP_TOKEN!,
    to: "5519995225006",
    diagnostico: "Alerta de Temperatura Alta",
    ativo: "RS7 - Calandra - BBA Óleo Térmico do Rolo Liso",
    unidade: "Gravataí / RS - RS7",
    recomendacao: "Verificar o sistema de resfriamento imediatamente."
  });
  
}

main();