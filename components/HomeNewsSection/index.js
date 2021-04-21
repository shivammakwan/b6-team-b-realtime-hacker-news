import React from "react";
import useSWR from "swr";
import NewsPost from "../NewsPost";

const fetchLatestNewsPost = (url) => fetch(url).then((r) => r.json());


const HomeNewsSection = () => {

    const { data: latestNewsPost, error: latestNewsPostError } = useSWR("/api/news/latest", fetchLatestNewsPost("/api/news/latest"));

    return (
        <div className="flex flex-wrap w-screen pl-10 pr-10">
            <div className=" flex w-full items-center">
                <h1 className="font-bold text-sm md:text-3xl px-4 py-1">News Posts</h1>
                <div className="h-1 w-full mr-10 pr-3 md:w-9/12 bg-red-500"></div>
            </div>
                
                {latestNewsPostError && (
                    <h1 className="text-center text-xl text-red-300 py-10">Failed To Get Latest News Post, Try Again.</h1>
                )}
                {!latestNewsPost && <h1 className="text-center text-xl text-gray-500 py-10">Loading News Post....</h1>}
                {latestNewsPost && (
                    <div className="mt-5 flex flex-wrap justify-between">
                        {latestNewsPost.slice(0, 8).map((newsPost, index) => {
                            return (
                                <NewsPost
                                    key={newsPost.id}
                                    title={newsPost.title}
                                    description={newsPost.description}
                                    postDate={newsPost.createdAt}
                                    postImage={newsPost.imageUrl}
                                    noOfPoints={newsPost.votes}
                                    author={newsPost.user.firstname + " " + newsPost.user.lastname}
                                    postUrl={newsPost.postUrl}
                                />
                            );
                        })}
                    </div>
                )}
            </div>
    );
};

export default HomeNewsSection;
