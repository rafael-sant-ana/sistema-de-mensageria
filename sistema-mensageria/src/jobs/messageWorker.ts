import { Worker } from "bullmq";
import { redis } from "../utils/redis";
import { sendMessage } from "../services/sendMessage";
import { Target } from "../models/Target";

export const messageWorker = new Worker(
  "messages",
  async (job) => {
    await sendMessage(job.data);
  },
  { connection: redis }
);

messageWorker.on("completed", (job) => {
  console.log(`✅ Mensagem enviada para ${new Target(job.data?.target).to}`);
});

messageWorker.on("failed", (job, err) => {
  console.error(`❌ Falha ao enviar para ${new Target(job?.data?.target).to}: ${err.message}`);
});