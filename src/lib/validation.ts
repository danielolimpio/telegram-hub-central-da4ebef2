import { z } from 'zod';

export const groupSchema = z.object({
  title: z.string()
    .trim()
    .min(3, 'Título deve ter no mínimo 3 caracteres')
    .max(100, 'Título deve ter no máximo 100 caracteres'),
  
  description: z.string()
    .trim()
    .min(10, 'Descrição deve ter no mínimo 10 caracteres')
    .max(50000, 'Descrição deve ter no máximo 50000 caracteres'),
  
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

// Password validation schema
export const passwordSchema = z.string()
  .min(8, 'Senha deve ter no mínimo 8 caracteres')
  .regex(/[A-Z]/, 'Senha deve conter ao menos uma letra maiúscula')
  .regex(/[a-z]/, 'Senha deve conter ao menos uma letra minúscula')
  .regex(/[0-9]/, 'Senha deve conter ao menos um número')
  .regex(/[^A-Za-z0-9]/, 'Senha deve conter ao menos um caractere especial');

// Signup validation schema
export const signupSchema = z.object({
  name: z.string()
    .trim()
    .min(2, 'Nome deve ter no mínimo 2 caracteres')
    .max(100, 'Nome deve ter no máximo 100 caracteres'),
  email: z.string()
    .email('Email inválido'),
  password: passwordSchema,
  confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
  message: 'As senhas não coincidem',
  path: ['confirmPassword']
});

export type SignupFormData = z.infer<typeof signupSchema>;
