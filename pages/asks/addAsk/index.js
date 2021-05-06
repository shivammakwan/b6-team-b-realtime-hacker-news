import styles from "../../../styles/Home.module.css";
import TextInput from "../../../components/TextInput";
import TextArea from "../../../components/TextArea";
import Button from "../../../components/Button";
import usePost from "../../../hooks/usePost";
import addAskStyles from "./addAsk.module.css";

export default function AddAsk() {
    const { title, setTitle, description, setDescription, onAskSubmit } = usePost();

    return (
        <div className="flex items-center h-screen w-full bg-teal-lighter">
            <div className="w-full bg-grey rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
                <h1 className="block w-full text-center text-grey-darkest mb-6 text-4xl">Ask HN</h1>
                <form className={addAskStyles.addAsk__form} onSubmit={onAskSubmit}>
                    <TextInput text={title} setText={setTitle} placeholder={"Ask HN"} />
                    <TextArea text={description} setText={setDescription} placeholder={"Ask HN Description"} />
                    <Button text={"Ask HN"} />
                </form>
            </div>
        </div>
    );
}
