import React from "react"
import useSWR from "swr"
import { TRENDING_NEWS_API } from "../../utility/constants"
import { fetcher } from "../../utility/common-service"
import TrendingItem from "../TrendingNews/TrendingItem"
import TopItem from "./TopItem"

const TrendingNews = (props) => {
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
        <div className="flex-1 p-2.5 flex-row items-center justify-between align-bottom m-1 mx-1 ">
            <div className="flex flex-row ml-10 mb-3 items-center">
                <h3 className=" font-bold text-3xl mr-12">Trending News</h3>
                <div className="mt-2 h-1 w-9/12 bg-red-500"></div>
            </div>
            {trendingNewsError && (
                <h1 className="text-center text-xl text-red-300 py-10">failed to get Trending News Post,Please Try Again.</h1>
            )}
            {!data && <h1 className="text-center text-xl text-gray-500 py-10">Loading Trending News....</h1>}
            <div className="flex flex-row flex-wrap ml-4 items-start mt-1 pt-1">
                {topTrending && (
                    <TopItem id={topTrending.trending_id} title={topTrending.title} date={topTrending.date} imageUrl={topTrending.image} />
                )}
                <div className="flex flex-col ml-1">
                    {data &&
                        data
                            .slice(0, 4)
                            .map((post) => (
                                <div key={post.trending_id}>
                                    {post.trending_id !== 1 ? (
                                        <TrendingItem id={post.trending_id} title={post.title} date={post.date} imageUrl={post.image} />
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
