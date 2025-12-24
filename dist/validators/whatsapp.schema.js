"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendWhatsAppAlertSchema = void 0;
const zod_1 = require("zod");
exports.sendWhatsAppAlertSchema = zod_1.z.object({
    to: zod_1.z.string().min(10, "Número inválido"),
    diagnostico: zod_1.z.string().min(3, "Diagnóstico obrigatório"),
    ativo: zod_1.z.string().min(3, "Ativo obrigatório"),
    unidade: zod_1.z.string().min(3, "Unidade obrigatória"),
    recomendacao: zod_1.z.string().min(5, "Recomendação obrigatória")
});
//# sourceMappingURL=whatsapp.schema.js.map