interface INotification {
    whatsapp: {
        body: string
        active: boolean
    },
    email: {
        subject: string
        body: string
        active: boolean
    },
    sms: {
        body: string
        active: boolean
    }
}

export type { INotification }