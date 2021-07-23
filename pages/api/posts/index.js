import prisma from "../../../prisma/connection-pool";

/* 
This api is used for fetching all the post

API: /api/posts?search={searchKeyword}&take={noOfrecords}&skip={skipNoOfrecords}&orderBy={start/end}&posttype={news/job} 

*/

export default async function (request, response) {
    console.info(" Controller => All Posts API");
    const { search, skip, take, orderBy, posttype } = request.query;
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
                type: posttype || undefined,
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
        console.log("Catch => server error while fetching All posts: " + error.message);
        response.status(500).json({
            status: "error",
            message: "Error: Unable to fetch all Posts, Please try again later.",
        });
    }
}
