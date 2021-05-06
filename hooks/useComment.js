import { useState } from "react";
import { URL} from "../utility/constants";
import { FETCH_POST } from "../utility/constants";
import { fetcher } from "../utility/common-service";
import useSWR, { mutate } from "swr";

function useComment(id) {

    const [comment, setComment] = useState("");
    const postId = parseInt(id);

    const { data: postData, error: postDataError } = useSWR(FETCH_POST + id , fetcher);

    
    const addComment = (e) =>{
        e.preventDefault();

        const commentsArray = [...postData.comments, {text:comment}]

        mutate(FETCH_POST + id, {...postData, comments: commentsArray}, false);
        setComment("");
       // console.log('postdata',postData);
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
            mutate(FETCH_POST + id);
        }).catch((error) => {
            alert(error);
            console.log(error);
        });;
    }

    return {
        comment, postData, postDataError, setComment, addComment
    }

}

export default useComment;