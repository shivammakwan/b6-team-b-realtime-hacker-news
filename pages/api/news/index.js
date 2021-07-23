import prisma from "../../../prisma/connection-pool";

/* 
This api is used for fetching all news

API: /api/news?search={searchKeyword}&take={noOfrecords}&skip={skipNoOfrecords}&orderBy={start/end} 

*/

export default async function (request, response) {
    console.info(" Controller => All News API");
    const { search, skip, take, orderBy } = request.query;
    const o = orderBy === "start" ? "asc" : "desc";
    const or = search
        ? {
              OR: [{ title: { contains: search } }, { description: { contains: search } }],
          }
        : {};

    try {
        const allPosts = await prisma.post_master.findMany({
            where: {
                isActive: true,
                type: "news",
                ...or,
            },
            take: Number(take) || undefined,
            skip: Number(skip) || undefined,
            orderBy: {
                createdAt: o || undefined,
            },
        });
        response.status(200).json(allPosts);
    } catch (error) {
        console.log("Catch => server error while fetching All news: " + error.message);
        response.status(500).json({
            status: "error",
            message: "Error: Unable to fetch all news, Please try again later.",
        });
    }
}
