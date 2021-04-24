import prisma from "../../../prisma/connection-pool";

export default async function (req, res) {
    try {
        if (req.method === "POST") {
            const { body } = req;
            console.log(req);
            const comment = await prisma.comment.create({ data: JSON.parse(body) });
            res.json(comment);
        }
    } catch (error) {
        console.log("Catch => server error while fetching Trending News: " + error.message);
        response.status(500).json({
            status: "error",
            message: "Unable To Fetch Trending News Posts",
        });
    } finally {
        prisma.$disconnect();
    }
}
