import Link from "next/link";

import NewsPost from "../components/NewsPost";
import styles from "../styles/Home.module.css";

import useSWR from "swr";

const fetchLatestNewsPost = (url) => fetch(url).then((r) => r.json());

export default function Home() {
    const { data: latestNewsPost, error: latestNewsPostError } = useSWR("/api/news/latest", fetchLatestNewsPost("/api/news/latest"));

    return (
        <>
            <div className={styles.main}>
                <h1 className={styles.title}>Trending News</h1>

                <h1 className={styles.title}>Asks</h1>

                <h1 className={styles.title}>Recent News</h1>
            </div>

            <section className="home-news-post pl-10 pr-10">
                <h1 className="text-3xl font-bold home-news-post-title">News Posts</h1>
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
                                />
                            );
                        })}
                    </div>
                )}
            </section>
        </>
    );
}
