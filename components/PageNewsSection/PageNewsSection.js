import React from "react";
import NewsPost from "../NewsPost";
import useNews from "../../hooks/useNews";

const PageNewsSection = () => {

    const {newsData, newsDataError} = useNews();

    return (
        <div className="pl-10 pr-10">
            {newsDataError && <h1 className="text-center text-xl text-red-300 py-10">Failed To Get Latest News Post, Try Again.</h1>}
            {!newsData && <h1 className="text-center text-xl text-gray-500 py-10">Loading News Post....</h1>}
            {newsData && (
                <div className="mt-5 flex flex-wrap justify-between">
                    {newsData.slice(0, 20).map((newsPost, index) => {
                        return (
                            <NewsPost
                                key={newsPost.id}
                                id= {newsPost.id}
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

export default PageNewsSection;
