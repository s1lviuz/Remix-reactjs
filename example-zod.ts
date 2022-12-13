import { z } from 'zod'

const userSchema = z
    .object({
        id: z
            .string(),
        createdAt: z
            .date(),
        updatedAt: z
            .date(),
        fullName: z
            .string()
            .max(256, {
                message: "Seu nome deve ter 256 ou menos caracteres, se você for esse caso, entre em contato conosco."
            }),
        username: z
            .string()
            .min(5, {
                message: "Seu nome de usuário deve ter ao menos 5 caracteres."
            }).max(24, {
                message: "Seu nome de usuário deve ter 24 ou menos caracteres."
            }),
        email: z
            .string()
            .email()
            .min(5, {
                message: "Sua senha deve ter pelo menos 5 caracteres."
            })
            .max(128, {
                message: "Seu email deve ter 128 ou menos caracteres."
            })
            .nullable(),
        password: z
            .string()
            .min(8, {
                message: "Sua senha deve ter pelo menos 8 caracteres."
            })
            .max(16, {
                message: "Sua senha deve ter 16 ou menos caracteres."
            })
    })

type UserSchemaInput = z.input<typeof userSchema>
type UserSchemaOutput = z.infer<typeof userSchema>

const createUserInDatabase = async () => {

}