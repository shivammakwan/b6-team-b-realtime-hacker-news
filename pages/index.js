import styles from "../styles/Home.module.css";
import TrendingNews from "../components/TrendingNews";
import HomeNewsSection from "../components/HomeNewsSection";
import HomeAskSection from "../components/HomeAskSection";

export default function Home() {
    return (
        <>
            <TrendingNews />
            <HomeAskSection/>
            <HomeNewsSection />
        </>
    );
}
