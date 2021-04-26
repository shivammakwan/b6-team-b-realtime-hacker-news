import prisma from "../../../prisma/connection-pool";

export default async function (req, res) {
    try {
        if (req.method === "POST") {
            const { body } = req;
            const like = await prisma.like.create({ data: JSON.parse(body) });
            res.json(like);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error.message,
            message: "Unable to update Like",
        });
    } finally {
        prisma.$disconnect();
    }
}
