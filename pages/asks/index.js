import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Button from "../../components/Button";
import useSWR from "swr";
import { LATEST_ASKS_API } from "../../utility/constants";
import { fetcher } from "../../utility/common-service";
import AskPost from "../../components/AskPost";

export default function Asks() {
    const { data: latestAskPost, error: latestAskPostError } = useSWR(LATEST_ASKS_API, fetcher);
    return (
        <>

        <div className="grid grid-rows-1 grid-flow-col">
            <div className="col-span-8 pl-12">
                <h1 className="mt-2 text-4xl font-medium">Asks Page</h1>
            </div>
            <div className="text-right pr-12">
                <Link href="/asks/addAsk" passHref>
                    <Button className="mt-2" text={"Ask HN"} />
                </Link>
            </div>
        </div>
        {latestAskPostError && <h1 className="text-center text-xl text-red-300 py-10">Failed To Get Latest Asks Post, Try Again.</h1>}
        {!latestAskPost && <h1 className="text-center text-xl text-gray-500 py-10">Loading Asks Post....</h1>}
        {latestAskPost && (
            <div className="mt-4 px-10 flex flex-wrap justify-items-start">
                {latestAskPost.map((asksPost, index) => {
                    return (
                        <AskPost
                            key={asksPost.id}
                            id={asksPost.id}
                            title={asksPost.title}
                            description={asksPost.description}
                            postDate={asksPost.createdAt}
                            noOfPoints={asksPost.votes}
                            author={asksPost.user.firstname + " " + asksPost.user.lastname}
                        />
                    );
                })}
            </div>
        )}
        </>
    );
}
