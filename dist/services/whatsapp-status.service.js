"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkWhatsAppStatus = checkWhatsAppStatus;
const axios_1 = __importDefault(require("axios"));
const env_1 = require("../config/env");
async function checkWhatsAppStatus() {
    try {
        const response = await axios_1.default.get(`https://graph.facebook.com/${env_1.env.META_API_VERSION}/${env_1.env.WHATSAPP_PHONE_NUMBER_ID}`, {
            headers: {
                Authorization: `Bearer ${env_1.env.WHATSAPP_TOKEN}`
            }
        });
        return response.data.status ?? "UNKNOWN";
    }
    catch (error) {
        console.error("Erro ao verificar status WhatsApp:", error);
        return "UNKNOWN";
    }
}
//# sourceMappingURL=whatsapp-status.service.js.map