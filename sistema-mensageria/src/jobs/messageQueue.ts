import { Queue } from "bullmq";
import { redis } from "../utils/redis";

export const messageQueue = new Queue("messages", { connection: redis });