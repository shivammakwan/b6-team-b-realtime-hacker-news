import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Button from "../../components/Button";

export default function Asks() {
    return (
        <div className="grid grid-rows-1 grid-flow-col">
            <div className="col-span-8 ">
                <h1 className={styles.title}>Asks Page</h1>
            </div>
            <div>
                <Link href="/asks/addAsk" passHref>
                    <Button text={"Ask HN"} />
                </Link>
            </div>
        </div>
    );
}
