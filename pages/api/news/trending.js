import { PrismaClient } from "@prisma/client"
import { date_Format } from "../../../utility/common-service"
const prisma = new PrismaClient();
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