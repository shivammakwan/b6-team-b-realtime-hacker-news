import React, { useState } from "react";
import useSWR from "swr";
//import fetch from "unfetch";
import { TRENDING_NEWS_API } from "../../utility/constants";

import TrendingItem from "../TrendingNews/TrendingItem";
import TopItem from "./TopItem";

const items = [
    {
        id: 1,
        title: `Spring Fashion Show At The University Of Michigan Has Started.`,
        date: `15th April 2021`,
        imageUrl: `https://html.quomodosoft.com/binduz/assets/images/trending-thumb.png`,
        upVote: 15,
    },
    {
        id: 2,
        title: `Sparks Of Inspiration To The New Trend 2021`,
        date: `15th February 2020`,
        imageUrl: `https://html.quomodosoft.com/binduz/assets/images/trending-news-list-thumb-2.jpg`,
        upVote: 5,
    },
    {
        id: 3,
        title: `Sparks Of Inspiration To The New Trend 2021`,
        date: `12th January 2020`,
        imageUrl: `https://html.quomodosoft.com/binduz/assets/images/trending-news-list-thumb-3.jpg`,
        upVote: 3,
    },
    {
        id: 4,
        title: `Sparks Of Inspiration To The New Trend 2021`,
        date: `14th April 2020`,
        imageUrl: `https://html.quomodosoft.com/binduz/assets/images/trending-news-list-thumb-1.jpg`,
        upVote: 1,
    },
];

const fetcher = async (path) => {
    const res = await fetch(path);
    return res.json();
};

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
        <div className="flex-1 p-2.5 flex-row items-center w-screen h-screen justify-between align-bottom m-10 ">
            <div className="flex flex-row ml-8 mb-3 items-center">
                <h3 className=" font-bold text-2xl mr-4">Trending News</h3>
                <div className="mt-2 h-1 w-2/6 bg-red-500"></div>
            </div>
            {trendingNewsError && (
                <h1 className="text-center text-xl text-red-300 py-10">failed to get Trending News Post,Please Try Again.</h1>
            )}
            {!data && <h1 className="text-center text-xl text-gray-500 py-10">Loading Trending News....</h1>}
            <div className="flex flex-row flex-wrap  ml-4 items-start">
                {topTrending && (
                    <TopItem id={topTrending.trending_id} title={topTrending.title} date={topTrending.date} imageUrl={topTrending.image} />
                )}
                <div className="flex flex-col ml-1">
                    {data &&
                        data
                            .slice(0,4)
                            .map((post) => (
                                <div key={post.trending_id}>
                                    {post.trending_id !== 1 ? <TrendingItem id={post.trending_id} title={post.title} date={post.date} imageUrl={post.image} /> : ``}
                                </div>
                            ))}
                </div>
            </div>
        </div>
    );
};

export default TrendingNews;
