import prisma from "../../../../prisma/connection-pool";

export default async function (req,res) {
    try{
        const commentCount = await prisma.comment.count({
            where: {
                postId: {
                    equals: Number(req.query.postId),
                },
            },
        });
        res.status(200).json(commentCount);
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            status: error,
            message: "Unable To Fetch Trending News Posts",
        });
    }
}