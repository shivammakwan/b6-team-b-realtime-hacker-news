import Head from "next/head";
import MainLayout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <MainLayout>
            <main className={styles.main}>
                <h1 className={styles.title}>Welcome to HackerNews</h1>
            </main>
        </MainLayout>
    );
}
