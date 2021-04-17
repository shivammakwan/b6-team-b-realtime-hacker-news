import { PrismaClient } from "@prisma/client";
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
                date:trending_news.createdAt    
            };
        });

        // response.status(200).json({
        //     status: "success",
        //     message: "list of trending news",
        //     data:trendingNews});
            response.status(200).json(trendingNews);
    } catch (error) {
        console.log('server error '+ error)
        response.status(500).json({
            status: "error",
            message: "Unable To Fetch Latest Ask Posts",
        });
    }finally{
        prisma.$disconnect()     
}}
