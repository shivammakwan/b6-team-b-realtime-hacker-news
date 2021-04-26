import styles from "../../../styles/Home.module.css";
import TextInput from "../../../shared/components/TextInput";
import Button from "../../../shared/components/Button";
import usePost from "../../../hooks/usePost";
import addNewsStyles from "./addNews.module.css";
import TextArea from "../../../shared/components/TextArea";

export default function AddNews() {
    const { title, setTitle, description, setDescription, postUrl, setPostUrl, imageUrl, setimageUrl, onNewsSubmit } = usePost();

    return (
        <div className={addNewsStyles.addNews}>
            <div>
                <h1 className={styles.title}>Add News</h1>
            </div>
            <div>
                <form className={addNewsStyles.addNews__form} onSubmit={onNewsSubmit}>
                    <TextInput text={title} setText={setTitle} placeholder={"News Title"} />
                    <TextArea text={description} setText={setDescription} placeholder={"Description"} />
                    <TextInput text={postUrl} setText={setPostUrl} placeholder={"News Link"} />
                    <TextInput text={imageUrl} setText={setimageUrl} placeholder={"News Image"} />
                    <Button className={addNewsStyles.addNews__submit} text={"Submit News"} />
                </form>
            </div>
        </div>
    );
}
