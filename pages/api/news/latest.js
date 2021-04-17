import { PrismaClient } from "@prisma/client";

export default async function (request, response) {
    const prisma = new PrismaClient({ log: ["query"] });

    try {
        const latestAsks = await prisma.post_master.findMany({
            where: {
                type: "news",
            },
            orderBy: [
                {
                    createdAt: "desc",
                },
            ],
        });

        response.status(200).json(latestAsks);
    } catch (error) {
        response.status(500).json({
            status: "error",
            message: "Unable To Fetch Latest Ask Posts",
        });
    }
}
