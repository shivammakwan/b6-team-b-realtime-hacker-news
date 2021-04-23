import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function (req, res) {
      const post = await prisma.post_master.findFirst({
        where: {
        id: {
            equals: Number(req.query.postId)
          }
        },
      });
      res.status(200).json(post);
  }