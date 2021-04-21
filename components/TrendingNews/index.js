import React from "react";
import useSWR from "swr";
import { TRENDING_NEWS_API } from "../../utility/constants";
import { fetcher } from "../../utility/common-service";
import TrendingItem from "../TrendingNews/TrendingItem";
import TopItem from "./TopItem";

const TrendingNews = () => {
    const { data, error: trendingNewsError } = useSWR(TRENDING_NEWS_API, fetcher);
    let topTrending;

    if (trendingNewsError) {
        console.log("Error fetching data " + trendingNewsError);
    }
    if (!data) {
        console.log("Loading... ");
    }
    if (data) {
        topTrending = data.find((post) => post.trending_id === 1);
    }

    return (
        <div className="flex w-screen flex-wrap h-auto pl-10 pr-10  ">
            <div className=" flex w-full items-center">
                <h1 className="font-bold text-sm md:text-3xl px-4 py-1">Trending News</h1>
                <div className="h-1 w-full mr-10 pr-3 md:w-9/12 bg-red-500"></div>
            </div>
            {trendingNewsError && (
                <h1 className="text-center text-base md:text-3xl text-red-400 py-8 px-10">
                    Failed to get Trending News Post, Please Try Again.
                </h1>
            )}
            {!data && !trendingNewsError && (
                <h1 className="text-center text-base md:text-3xl text-gray-500 py-8 px-10">Loading Trending News....</h1>
            )}
            <div className="flex flex-wrap  items-start pr-5 mr-1">
                {topTrending && (
                    <TopItem
                        id={topTrending.trending_id}
                        posturl={topTrending.url}
                        title={topTrending.title}
                        date={topTrending.date}
                        imageUrl={topTrending.image}
                    />
                )}

                <div className="flex flex-col">
                    {data &&
                        data
                            .slice(0, 5)
                            .map((post) => (
                                <div key={post.trending_id}>
                                    {post.trending_id !== 1 ? (
                                        <TrendingItem
                                            id={post.trending_id}
                                            posturl={post.url}
                                            title={post.title}
                                            date={post.date}
                                            imageUrl={post.image}
                                        />
                                    ) : (
                                        ``
                                    )}
                                </div>
                            ))}
                </div>
            </div>
        </div>
    );
};

export default TrendingNews;
