import styles from "../styles/Home.module.css";
import TrendingNews from "../components/TrendingNews";
import HomeNewsSection from "../components/HomeNewsSection";

export default function Home() {
    return (
        <>
            <TrendingNews />
            <HomeNewsSection />
        </>
    );
}
