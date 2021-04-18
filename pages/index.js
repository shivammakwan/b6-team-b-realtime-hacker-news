import styles from "../styles/Home.module.css";
import TrendingNews from "../components/TrendingNews";

export default function Home() {
    return (
        <main className={styles.main}>
            <TrendingNews />
            <h1 className={styles.title}>Asks</h1>
            <h1 className={styles.title}>Recent News</h1>
        </main>
    );
}
