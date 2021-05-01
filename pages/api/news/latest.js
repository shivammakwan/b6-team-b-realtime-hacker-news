import prisma from "../../../prisma/connection-pool";
import { date_Format } from "../../../utility/common-service";
/* 
This api is used for fetching latest news post

API: /api/news/latest 

*/

export default async function (request, response) {
    console.info(" Controller => Latest News");
    try {
        const latestAsks = await prisma.post_master.findMany({
            where: {
                type: "news",
            },
            orderBy: [
                {
                    createdAt: "desc",
                },
            ],
            include: {
                user: {
                    select: {
                        firstname: true,
                        lastname: true,
                    },
                },
            },
        });

        const latest_news = latestAsks.map(function (latest_news) {
            return {
                id: latest_news.id,
                title: latest_news.title,
                imageUrl: latest_news.imageUrl,
                postUrl: latest_news.postUrl,
                description: latest_news.description,
                votes: latest_news.votes,
                user: latest_news.user,
                createdAt: date_Format(latest_news.createdAt),
            };
        });
        response.status(200).json(latest_news);
    } catch (error) {
        console.log("Catch => server error while fetching Latest News: " + error.message);
        response.status(500).json({
            status: "error",
            message: "Unable To Fetch Latest Ask Posts",
        });
    }
}
