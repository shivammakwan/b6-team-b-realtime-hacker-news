import { useState } from "react";
import { ADD_COMMENT_URL } from "../utility/constants";
import { FETCH_POST_BY_ID } from "../utility/constants";
import { fetcher } from "../utility/common-service";
import useSWR, { mutate } from "swr";

function useComment(id) {
    const [comment, setComment] = useState("");
    const postId = parseInt(id);

    const { data: postData, error: postDataError } = useSWR(FETCH_POST_BY_ID + id, fetcher);

    const addComment = (e) => {
        e.preventDefault();

        const commentsArray = [...postData.comments, { text: comment }];

        mutate(FETCH_POST_BY_ID + id, { ...postData, comments: commentsArray }, false);
        console.log("postdata", postData);
        fetch(ADD_COMMENT_URL, {
            method: "POST",
            body: JSON.stringify({
                parentId: postId,
                level: 1,
                text: comment,
                userId: 1,
                postId: postId,
            }),
        })
            .then(() => {
                setComment("");
                mutate(FETCH_POST_BY_ID + id);
            })
            .catch((error) => {
                alert(error);
                console.log(error);
            });
    };

    return {
        comment,
        postData,
        postDataError,
        setComment,
        addComment,
    };
}

export default useComment;
