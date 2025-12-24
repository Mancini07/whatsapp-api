"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.whatsappClient = void 0;
const axios_1 = __importDefault(require("axios"));
const env_1 = require("../config/env");
exports.whatsappClient = axios_1.default.create({
    baseURL: `https://graph.facebook.com/${env_1.env.META_API_VERSION}`,
    headers: {
        "Authorization": `Bearer ${env_1.env.WHATSAPP_TOKEN}`,
        "Content-Type": "application/json"
    }
});
//# sourceMappingURL=whatsapp.client.js.map