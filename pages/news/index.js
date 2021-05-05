import Link from "next/link";
import Button from "../../components/Button";

import useSWR from "swr";
import { LATEST_NEWS_API } from "../../utility/constants";
import { fetcher } from "../../utility/common-service";
import NewsPost from "../../components/NewsPost";

export default function News() {
    const { data: latestNewsPost, error: latestNewsPostError } = useSWR(LATEST_NEWS_API, fetcher);

    return (
        <>
            <div className="grid grid-rows-1 grid-flow-col">
                <div className="col-span-8 pl-12">
                    <h1 className="mt-2 text-4xl font-medium">Latest News</h1>
                </div>
                <div className="text-right pr-12">
                    <Link href="/news/addNews" passHref>
                        <Button className="mt-2" text={"Submit News"} />
                    </Link>
                </div>
            </div>

            {latestNewsPostError && <h1 className="text-center text-xl text-red-300 py-10">Failed To Get Latest News Post, Try Again.</h1>}
            {!latestNewsPost && <h1 className="text-center text-xl text-gray-500 py-10">Loading News Post....</h1>}
            {latestNewsPost && (
                <div className="mt-10 px-10 flex flex-wrap justify-items-start">
                    {latestNewsPost.map((newsPost, index) => {
                        return (
                            <NewsPost
                                key={newsPost.id}
                                id={newsPost.id}
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
        </>
    );
}
