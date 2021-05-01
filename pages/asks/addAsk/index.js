import styles from "../../../styles/Home.module.css";
import TextInput from "../../../shared/components/TextInput";
import TextArea from "../../../shared/components/TextArea";
import Button from "../../../shared/components/Button";
import usePost from "../../../hooks/usePost";
import addAskStyles from "./addAsk.module.css";

export default function AddAsk() {
    const { title, setTitle, description, setDescription, onAskSubmit } = usePost();

    return (
        <div className={addAskStyles.addAsk}>
            <div>
                <h1 className={styles.title}>Add HN</h1>
            </div>
            <div>
                <form className={addAskStyles.addAsk__form} onSubmit={onAskSubmit}>
                    <TextInput text={title} setText={setTitle} placeholder={"Ask HN"} />
                    <TextArea text={description} setText={setDescription} placeholder={"Ask HN Description"} />
                    <Button text={"Ask HN"} />
                </form>
            </div>
        </div>
    );
}
