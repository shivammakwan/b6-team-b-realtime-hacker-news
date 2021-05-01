import prisma from "../../../../prisma/connection-pool";

export default async function (req,res) {
    try{
        console.log(req);
        const res = await prisma.like.delete({
            where: {
                parentId: {
                    equals: Number(req.body.postId),
                },
                userId: {
                    equals: Number(req.body.userId)
                }
            },
        });
        res.status(200).json(res);
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            status: error,
            message: "Unable To Fetch Trending News Posts",
        });
    }
}