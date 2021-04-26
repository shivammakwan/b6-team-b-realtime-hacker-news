import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Button from "../../shared/components/Button";
import PageNewsSection from "../../components/PageNewsSection/PageNewsSection";

export default function News() {
    return (
        <div className="flex flex-col">
            <div className="flex justify-between pl-10 pr-10">
                <div className="flex col-span-8">
                    <h1 className={styles.title}>News Page</h1>
                </div>
                <div className='flex place-items-end'>
                    <Link href="/news/addNews" passHref>
                        <Button text={"Submit News"} />
                    </Link>
                </div>
            </div>
            <div className="flex">
                <PageNewsSection />
            </div>
        </div>
    );
}
