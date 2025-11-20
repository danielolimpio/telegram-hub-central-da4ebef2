import { z } from 'zod';

export const groupSchema = z.object({
  title: z.string()
    .trim()
    .min(3, 'Título deve ter no mínimo 3 caracteres')
    .max(100, 'Título deve ter no máximo 100 caracteres'),
  
  description: z.string()
    .trim()
    .min(10, 'Descrição deve ter no mínimo 10 caracteres')
    .max(5000, 'Descrição deve ter no máximo 5000 caracteres'),
  
  telegram_link: z.string()
    .url('Link inválido')
    .refine(
      (url) => url.includes('t.me/'),
      'Deve ser um link válido do Telegram (t.me/)'
    ),
  
  members: z.union([
    z.string().transform((val) => {
      if (!val) return null;
      const parsed = parseInt(val);
      if (isNaN(parsed)) throw new Error('Número de membros inválido');
      if (parsed < 0) throw new Error('Número de membros deve ser positivo');
      if (parsed > 1000000) throw new Error('Número de membros deve ser menor que 1.000.000');
      return parsed;
    }),
    z.literal('').transform(() => null),
    z.null()
  ]),
  
  category: z.string()
    .min(1, 'Selecione uma categoria')
});

export type GroupFormData = z.infer<typeof groupSchema>;
