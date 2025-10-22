import { ISendMessageDTO } from "./ISendMessageDTO";

export async function sendMessage(data: ISendMessageDTO) {
    const { notification, target } = data

    console.log(notification, target)

    await new Promise((r) => setTimeout(r, 1000)); // simula delay
}