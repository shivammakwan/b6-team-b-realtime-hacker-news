import { useRouter } from "next/router";
import useComment from "../../hooks/useComment";
import TextArea from "../../components/TextArea";
import CommentCard from "../../components/CommentCard";
import Button from "../../components/Button";

export default function Post() {
    const router = useRouter();
    const { postId } = router.query;

    const { comment, postData, postDataError, setComment, addComment } = useComment(postId);

    return (
        <div className="flex flex-col">
            {postData && (
                <div className="place-items-center">
                    <div className="flex flex-col mx-6 my-4">
                        <h1 className="text-4xl mb-2">{postData.post.title}</h1>
                        <h5 className="text-s">{postData.post.description}</h5>
                    </div>
                    <div className="flex flex-col mx-6">
                        <form onSubmit={addComment}>
                            <TextArea text={comment} setText={setComment} placeholder="Write your comment ?" />
                            <Button text={"Add Comment"} />
                        </form>
                    </div>
                </div>
            )}
            <div className="mb-4">
                {postData &&
                    postData.comments.map((comment) => {
                        return (
                            <div>
                                <CommentCard key={comment.id} comment={comment.text} userName={"testUser1"} />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}
