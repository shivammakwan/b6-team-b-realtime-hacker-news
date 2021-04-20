// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    const post_data = {
        statusCode: 200,
        status: "success",
        message: "List of Questions",
        data: [
            {
                id: 1,
                postUrl: "https://ieftimov.com/post/deep-dive-cors-history-how-it-works-best-practices/",
                image: "https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&dpr=1&w=300",
                title: "Ask HN",
                description: "description",
                section: "Technology",
                time: new Date(),
                isActive: true,
            },
            {
                id: 2,
                postUrl: "https://ieftimov.com/post/deep-dive-cors-history-how-it-works-best-practices/",
                image: "https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&dpr=1&w=300",
                title: "Ask HN",
                description: "description",
                section: "Technology",
                time: new Date(),
                isActive: true,
            },
            {
                id: 3,
                postUrl: "https://ieftimov.com/post/deep-dive-cors-history-how-it-works-best-practices/",
                image: "https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&dpr=1&w=300",
                title: "Ask HN",
                description: "description",
                section: "Technology",
                time: new Date(),
                isActive: true,
            },
        ],
    };
    res.status(200).json(post_data);
};
