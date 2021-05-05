import { PrismaClientValidationError } from "@prisma/client";
import { date_Format } from "../../../utility/common-service";
import prisma from "../../../prisma/connection-pool";
/* 
This api is used for fetching trending news post

API: /api/news/trending 

*/

export default async function (request, response) {
    console.info(" Controller => Trending News");
    try {
        const dbData = await prisma.post_master.findMany({
            where: {
                type: "news",
                votes: {
                    gt: 0,
                },
            },
            take: 5,
            orderBy: [
                {
                    votes: "desc",
                },
                {
                    createdAt: "asc",
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

        let record_count = 0;
        const trendingNews = dbData.map(function (trending_news) {
            record_count++;
            return {
                trending_id: record_count,
                title: trending_news.title,
                image: trending_news.imageUrl,
                url: trending_news.postUrl,
                desc: trending_news.description,
                votes: trending_news.votes,
                postid: trending_news.id,
                date: date_Format(trending_news.createdAt),
            };
        });
        response.status(200).json(trendingNews);
    } catch (e) {
        console.log("Catch => server error while fetching Trending News: ");
        if (e instanceof PrismaClientValidationError) {
            switch (e.code) {
                case "P1000":
                    console.log("DB Authentication failed.");
                    break;
                case "P1001":
                    console.log("Unable to connect to DB.");
                    break;
                case "P1002":
                    console.log("DB request timeout.");
                    break;
                default:
                    console.log("Error e " + e.message);
            }
        }
        response.status(500).json({
            status: "error",
            message: "Unable To Fetch Trending News Posts",
        });
    } finally {
        prisma.$disconnect();
    }
}
