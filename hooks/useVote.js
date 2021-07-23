import { useEffect, useState } from "react";
import { URL, FETCH_VOTE_COUNT,FETCH_VOTE_STATUS, FETCH_COMMENT_COUNT } from "../utility/constants";
import useSWR, { mutate } from "swr";
import { fetcher } from "../utility/common-service";

function useVote(id) {
    const postId = parseInt(id);
    const userId = 1;
    const { data: voteCount, error: voteCountError } = useSWR(FETCH_VOTE_COUNT + postId, fetcher);
    const { data: commentCount, error: commentCountError } = useSWR(FETCH_COMMENT_COUNT + postId, fetcher);
    //const { data: ifAlreadyVoted, error: voteStatusError } = useSWR(FETCH_VOTE_STATUS + postId + '/' + userId, fetcher);

   // console.log(ifAlreadyVoted);

    const [upVote, setUpVote] = useState(false);

    const onUpVote = () => {
        setUpVote(true);
        mutate(FETCH_VOTE_COUNT + postId, voteCount + 1, false);
        fetch(`${URL}/posts/vote/addVote`, {
            method: "POST",
            body: JSON.stringify({
                parentId: postId,
                userId: userId,
            }),
        })
            .then(() => {
                mutate(FETCH_VOTE_COUNT + postId);
            })
            .catch((error) => {
                setUpVote(false);
                console.log(error);
            });
    };

    const onUnVote = () => {
        setUpVote(false);
        mutate(FETCH_VOTE_COUNT + postId, voteCount - 1, false);
        fetch(`${URL}/posts/vote/deleteVote/${postId}/${userId}`, {
            method: "DELETE",
        })
            .then((res) => {
                console.log(res);
            })
            .then(() => {
                mutate(FETCH_VOTE_COUNT + postId);
            })
            .catch((error) => {
                setUpVote(true);
                console.log(error);
                alert(error.message);
            });
    };

    useEffect(() => {}, [upVote]);

    return { onUpVote, upVote, onUnVote, voteCount, commentCount };
}

export default useVote;
