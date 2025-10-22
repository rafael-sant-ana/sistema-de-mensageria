import { INotification } from "../../types/notification"
import { ITarget } from "../../types/target"

interface ISendMessageDTO {
    target: ITarget
    notification: INotification
}

export type { ISendMessageDTO }