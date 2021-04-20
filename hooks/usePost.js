import { useState } from "react";
import { URL, POST_TYPE_NEWS, POST_TYPE_ASK } from "../utility/constants";

function usePost() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [postUrl, setPostUrl] = useState("");
    const [imageUrl, setimageUrl] = useState("");

    const onAskSubmit = (e) => {
        e.preventDefault();

        fetch(`${URL}/addPost`, {
            method: "POST",
            body: JSON.stringify({
                type: POST_TYPE_ASK,
                title: title,
                description: description,
                userId: 1,
            }),
        }).then(() => {
            setTitle("");
            setDescription("");
            alert('Ask Sent Succesfully.')
        }).catch((error) => {
            alert(error);
            console.log(error);
        });
    };

    const onNewsSubmit = (e) => {
        e.preventDefault();

        fetch(`${URL}/addPost`, {
            method: "POST",
            body: JSON.stringify({
                type: POST_TYPE_NEWS,
                title: title,
                description: description,
                postUrl: postUrl,
                imageUrl: imageUrl,
                userId: 1,
            }),
        }).then(() => {
            setTitle("");
            setDescription("");
            setPostUrl("");
            setimageUrl("");
        }).catch((error) => {
            alert(error);
            console.log(error);
        });;
    };

    return {
        title,
        setTitle,
        description,
        setDescription,
        postUrl,
        setPostUrl,
        imageUrl,
        setimageUrl,
        onNewsSubmit,
        onAskSubmit,
    };
}

export default usePost;
