import prisma from "../../../prisma/connection-pool";
/* 
This api is used for fetching post by id

API: /api/posts/:id

*/
export default async function (req, res) {
    console.info(" Controller => Fetch post bt id");
    try {
        const post = await prisma.post_master.findFirst({
            where: {
                id: {
                    equals: Number(req.query.postId),
                },
            },
        });

        const comments = await prisma.comment.findMany({
            where: {
                postId: {
                    equals: Number(req.query.postId),
                },
            },
        });

        const data = { post: post, comments: comments };

        res.status(200).json(data);
    } catch (error) {
        console.log("Catch => server error while fetching post by id: " + error.message);
        res.status(500).json({
            status: "error",
            message: "Error: Unable to fetch Post by id, Please try again later.",
        });
    } finally {
        prisma.$disconnect();
    }
}
