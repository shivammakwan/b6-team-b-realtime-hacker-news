import TitleName from "../../components/Layout/TitleName/TitleName";
import styles from "../../styles/Home.module.css";
import Questions from "./questions";

export default function Asks() {
    return (
        <div className="divide-y divide-gray-100">
            <TitleName title={"Asks Page"} />
            <Questions />
        </div>
    );
}
