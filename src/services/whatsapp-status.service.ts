import axios from "axios";
import { env } from "../config/env";

export async function checkWhatsAppStatus(): Promise<"ACTIVE" | "PENDING" | "UNKNOWN"> {
  try {
    const response = await axios.get(
      `https://graph.facebook.com/${env.META_API_VERSION}/${env.WHATSAPP_PHONE_NUMBER_ID}`,
      {
        headers: {
          Authorization: `Bearer ${env.WHATSAPP_TOKEN}`
        }
      }
    );

    return response.data.status ?? "UNKNOWN";
  } catch (error) {
    console.error("Erro ao verificar status WhatsApp:", error);
    return "UNKNOWN";
  }
}
