import prisma from "../../../../../../prisma/connection-pool";

export default async function (req,res) {
    try{
        console.log('delete req', req.query.userId);
        console.log('delete req', req.query.postId);
        const res = await prisma.like.deleteMany({
            where: {
                userId:Number(req.query.userId),
                parentId:Number(req.query.postId),
            },
        });
        res.status(200).json(res);
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            status: error,
            message: "Unable To Delete vote.",
        });
    }
}