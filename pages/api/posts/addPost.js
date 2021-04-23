import prisma from "../../../prisma/connection-pool";

export default async function (req, res) {
  if (req.method === 'POST') {
    const { body } = req;
    console.log(req);
    const post = await prisma.post_master.create({ data: JSON.parse(body)});
    res.json(post);
  }
}
