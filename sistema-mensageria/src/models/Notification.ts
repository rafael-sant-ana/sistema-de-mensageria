import { INotification } from "../types/notification";

class Notification implements INotification {
    email: { subject: string; body: string; active: boolean; };
    sms: { body: string; active: boolean; };
    whatsapp: { body: string; active: boolean; };

    constructor({ email, sms, whatsapp }: INotification) {
        this.email = email
        this.sms = sms
        this.whatsapp = whatsapp
    }
}

export { Notification }
