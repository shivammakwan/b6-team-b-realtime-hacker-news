import Link from "next/link";
import NewsPost from "../components/NewsPost";
import styles from "../styles/Home.module.css";
import TrendingNews from "../components/TrendingNews";
import useSWR from "swr";
import HomeNewsSection from "../components/HomeNewsSection";

const fetchLatestNewsPost = (url) => fetch(url).then((r) => r.json());

export default function Home() {
    const { data: latestNewsPost, error: latestNewsPostError } = useSWR("/api/news/latest", fetchLatestNewsPost("/api/news/latest"));

    return (
        <>
            <div className={styles.main}>
                <TrendingNews />
                <h1 className={styles.title}>Asks</h1>
                <HomeNewsSection/>
            </div>

            
        </>
    );
}
