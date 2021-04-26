import { useEffect, useState } from "react";
import {URL} from "../utility/constants";
import useSWR from "swr";

function useVote(postId) {

    const {data : voteData, error: voteDataError} = useSWR()

    const [upVote, setUpVote] = useState(false);

    const onUpVote = () => {
        setUpVote(true);
        fetch(`${URL}/posts/likePost`,{
            method: 'POST',
            body: JSON.stringify({
                parentId: postId,
                userId: 1,
            })
        }).catch((error)=>{
            console.log(error);
        })
    } 

    useEffect(() => {

    },[upVote])

    return {onUpVote, upVote};

}

export default useVote;