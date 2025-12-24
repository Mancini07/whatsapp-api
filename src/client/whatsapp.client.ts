import axios from "axios";
import { env } from "../config/env";

export const whatsappClient = axios.create({
  baseURL: `https://graph.facebook.com/${env.META_API_VERSION}`,
  headers: {
    "Authorization": `Bearer ${env.WHATSAPP_TOKEN}`,
    "Content-Type": "application/json"
  }
});