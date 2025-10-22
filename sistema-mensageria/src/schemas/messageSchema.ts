import { z } from 'zod'

const messageSchema = z.object({
    target: z.object({
        name: z.string(),
        email: z.string(),
        phone: z.string()
    }),
    notifications: z.object({
        whatsapp: z.object({
            body: z.string(),
        }),
        email: z.object({
            subject: z.string(),
            body: z.string()
        }),
        sms: z.object({
            body: z.string(),
        }),
    }),
    sendAt: z.coerce.date()
})

export { messageSchema }
