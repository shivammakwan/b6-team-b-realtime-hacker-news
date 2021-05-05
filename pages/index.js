import styles from "../styles/Home.module.css";
import TrendingNews from "../components/TrendingNews";
import HomeNewsSection from "../components/HomeNewsSection";

export default function Home() {
    return (
        <>
            <TrendingNews />
            {/* <h1 className={styles.title}>Asks</h1> */}
            <HomeNewsSection />
        </>
    );
}
