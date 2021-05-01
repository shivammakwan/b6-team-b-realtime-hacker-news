import prisma from "../../../prisma/connection-pool";

export default async function (req, res) {
    try {
        const post = await prisma.post_master.findFirst({
            where: {
                id: {
                    equals: Number(req.query.postId),
                },
            },
        });

        const comments = await prisma.comment.findMany({
          where:{
            postId: {
              equals: Number(req.query.postId),
          },
          }
        })

        const data = {post : post, comments : comments}

        res.status(200).json(data);
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
