import TextInput from "../../../components/TextInput";
import Button from "../../../components/Button";
import usePost from "../../../hooks/usePost";
import addNewsStyles from "./addNews.module.css";
import TextArea from "../../../components/TextArea";

export default function AddNews() {
    const { title, setTitle, description, setDescription, postUrl, setPostUrl, imageUrl, setimageUrl, onNewsSubmit } = usePost();

    return (
        <div className="flex items-center h-screen w-full bg-teal-lighter">
            <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
                <h1 className="block w-full text-center text-grey-darkest mb-6 text-4xl">Add News</h1>
                <form className="flex flex-col" onSubmit={onNewsSubmit}>
                    <TextInput text={title} setText={setTitle} placeholder={"News Title"} required />
                    <TextArea text={description} setText={setDescription} placeholder={"Description"} required />
                    <TextInput text={postUrl} setText={setPostUrl} placeholder={"News Link"} required />
                    <TextInput text={imageUrl} setText={setimageUrl} placeholder={"News Image"} />
                    <Button text={"Submit News"} />
                </form>
            </div>
        </div>
    );
}
