import styles from "../../../styles/Home.module.css";
import TextInput from "../../../components/TextInput";
import Button from "../../../components/Button";
import usePost from "../../../hooks/usePost";
import addNewsStyles from "./addNews.module.css";
import TextArea from "../../../components/TextArea";

export default function AddNews() {
    const { title, setTitle, description, setDescription, postUrl, setPostUrl, imageUrl, setimageUrl, onNewsSubmit } = usePost();

    return (
        <div className={addNewsStyles.addNews}>
            
            <div>
                <h1 className="mt-2 text-4xl font-medium">Add News</h1>
            </div>
            <div>
                <form className={addNewsStyles.addNews__form} onSubmit={onNewsSubmit}>
                    <TextInput text={title} setText={setTitle} placeholder={"News Title"} required />
                    <TextArea text={description} setText={setDescription} placeholder={"Description"} required />
                    <TextInput text={postUrl} setText={setPostUrl} placeholder={"News Link"} required />
                    <TextInput text={imageUrl} setText={setimageUrl} placeholder={"News Image"} />
                    <Button className={addNewsStyles.addNews__submit} text={"Submit News"} />
                </form>
            </div>
        </div>
    );
}
