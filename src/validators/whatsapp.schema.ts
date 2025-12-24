import { z } from "zod";

export const sendWhatsAppAlertSchema = z.object({
  to: z.string().min(10, "Número inválido"),
  diagnostico: z.string().min(3, "Diagnóstico obrigatório"),
  ativo: z.string().min(3, "Ativo obrigatório"),
  unidade: z.string().min(3, "Unidade obrigatória"),
  recomendacao: z.string().min(5, "Recomendação obrigatória")
});