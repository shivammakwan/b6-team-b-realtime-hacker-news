import prisma from "../../prisma/connection-pool";
/* 
This api is used for storing post to DB

API: /api/addPost

*/

export default async function (req, res) {
    console.info(" Controller => add posts");
    try {
        if (req.method === "POST") {
            const { body } = req;
            console.log(req);
            const post = await prisma.post_master.create({ data: JSON.parse(body) });
            res.json(post);
        }
    } catch (error) {
        console.log("Catch => server error while Storing post: " + error.message);
        res.status(500).json({
            status: "error",
            message: "Error: Unable to store post to DB, Please try again later.",
        });
    } finally {
        prisma.$disconnect();
    }
}
