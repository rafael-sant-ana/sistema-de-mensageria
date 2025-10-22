import { FastifyPluginAsync  } from "fastify";
import { messageQueue } from "../../jobs/messageQueue";
import { messageSchema } from "../../schemas/messageSchema";

const messages: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
    fastify.post('/schedule', async (req, res) => {

        const parseResult = messageSchema.safeParse(req.body);

        if (!parseResult.success) {
            return res.status(400).send({
                ok: false,
                errors: parseResult.error.flatten().fieldErrors,
            });
        }


        const { notifications, target, sendAt } = parseResult.data

        const delay = ((new Date(sendAt)).getTime()) - ((new Date()).getTime())


        await messageQueue.add("send", { target, notifications }, { delay: Math.max(delay, 0) });

        return { ok: true, delay }
    })
}

export default messages;
