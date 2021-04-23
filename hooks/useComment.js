import { useState } from "react";
import { URL} from "../utility/constants";

function useComment(Id) {

    const postId = parseInt(Id);
    const [comment, setComment] = useState("");
    
    const addComment = (e) =>{
        e.preventDefault();

        fetch(`${URL}/posts/addComment`, {
            method: "POST",
            body: JSON.stringify({
                parentId: postId,
                level: 1,
                text : comment,
                userId: 1,
                postId:postId
            }),
        }).then(() => {
            setText("");
        }).catch((error) => {
            alert(error);
            console.log(error);
        });;
    }

    return {
        comment, setComment, addComment
    }

}

export default useComment;