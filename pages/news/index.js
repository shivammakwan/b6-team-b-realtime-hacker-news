import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Button from "../../components/Button";

export default function News() {
    return (
        <div className="grid grid-rows-1 grid-flow-col">
            <div className="col-span-8 ">
                <h1 className={styles.title}>News Page</h1>
            </div>
            <div>
                <Link href="/news/addNews" passHref>
                    <Button text={"Submit News"} />
                </Link>
            </div>
        </div>
    );
}
