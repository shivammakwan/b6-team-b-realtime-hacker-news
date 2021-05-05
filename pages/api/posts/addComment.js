import prisma from "../../../prisma/connection-pool";

export default async function (req, res) {
    console.info(" Controller => add comments");
    try {
        if (req.method === "POST") {
            const { body } = req;
            console.log(req);
            const comment = await prisma.comment.create({ data: JSON.parse(body) });
            res.json(comment);
        }
    } catch (error) {
        console.log("Catch => server error while Storing comments: " + error.message);
        res.status(500).json({
            status: "error",
            message: "Error: Unable to store Comments to DB, Please try again later.",
        });
    } finally {
        prisma.$disconnect();
    }
}
