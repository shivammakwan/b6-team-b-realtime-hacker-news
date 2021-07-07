import React from "react";
import useSWR from "swr";
import AskPost from "../AskPost";
import { LATEST_ASKS_API } from "../../utility/constants";
import { fetcher } from "../../utility/common-service";

const HomeAskSection = () => {
    const { data: latestAskData, error: latestAskDataError } = useSWR(LATEST_ASKS_API, fetcher);
    return (
        <div className="flex flex-wrap w-screen pl-10 pr-10 mt-2">
            <div className=" flex w-full items-center mb-2">
                <h1 className="font-bold text-sm md:text-3xl px-4 py-1 w-max">Ask Posts</h1>
                <div className="h-1 w-full mr-10 pr-3 md:w-full bg-red-500"></div>
            </div>
            {latestAskDataError && <h1 className="text-center text-xl text-red-300 py-10">Failed To Get Latest Asks Post, Try Again.</h1>}
            {!latestAskData && <h1 className="text-center text-xl text-gray-500 py-10">Loading Asks Post....</h1>}
            {latestAskData && (
                <div className="flex flex-wrap justify-between">
                    {latestAskData.slice(0, 4).map((newsPost, index) => {
                        return (
                            <AskPost
                                key={newsPost.id}
                                id= {newsPost.id}
                                title={newsPost.title}
                                description={newsPost.description}
                                postDate={newsPost.createdAt}
                                noOfPoints={newsPost.votes}
                                author={newsPost.user.firstname + " " + newsPost.user.lastname}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default HomeAskSection;
