import prisma from "../../../prisma/connection-pool";

export default async function (req,res) {
    try{
        const votes = await prisma.like.count({
            where: {
                parentId: {
                    equals: Number(req.query.postId),
                },
            },
        });
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            status: "error",
            message: "Unable To Fetch Trending News Posts",
        });
    }
}