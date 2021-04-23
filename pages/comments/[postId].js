import Link from "next/link";
import { fetcher } from "../../utility/common-service";
import { useRouter } from "next/router";
import useComment from "../../hooks/useComment";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";
import useSWR from "swr";
import { FETCH_POST } from "../../utility/constants";

export default function Post() {
    const router = useRouter();
    const { postId } = router.query;

    const { comment, setComment, addComment } = useComment(postId);

    const { data: postData, error: postDataError } = useSWR(FETCH_POST + postId, fetcher);

    console.log(postData);

    return (
        <div className=" grid  ">
            {postData && (
                <div className="place-items-center">
                    <h1 className="text-4xl">{postData.post.title}</h1>
                    <h5 className="text-s">{postData.post.description}</h5>

                    <form className="flex flex-col" onSubmit={addComment}>
                        <TextArea text={comment} setText={setComment} placeholder="Write your comment ?" />
                        <Button text={"Add Comment"} />
                    </form>
                </div>
            )}

            {postData.comments.map((comment) => {
                return (
                    <div>
                        <p>{comment.text}</p>
                    </div>
                );
            })}
        </div>
    );
}
