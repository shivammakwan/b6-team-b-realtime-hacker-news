import React from "react";
import useComment from "../../hooks/useComment";
import CommentCard from "../Comment/CommentCard";
import CommentForm from "../Comment/CommentForm";

const CommentSection = ({postId}) => {

    const { comment, postData, postDataError, setComment, addComment } = useComment(postId);

    return (
        <div className="flex flex-col">
            
        {postDataError && <h1 className="text-center text-xl text-red-300 py-10">Failed To Get Latest News Post, Try Again.</h1>}
        {!postData && <h1 className="text-center text-xl text-gray-500 py-10">Loading Post Comments...</h1>}

        {postData && (
            
            <div className="place-items-center">
                <div className="flex flex-col mx-6 my-4">
                    <h1 className="text-4xl mb-2">{postData.post.title}</h1>
                    <h5 className="text-s">{postData.post.description}</h5>
                </div>
                <CommentForm comment = {comment} setComment={setComment} addComment={addComment}/>
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
};

export default CommentSection;
