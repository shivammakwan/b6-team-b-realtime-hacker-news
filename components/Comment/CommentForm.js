import React from "react";
import TextArea from "../../shared/components/TextArea";
import Button from "../../shared/components/Button";



const CommentForm = ({ comment, setComment, addComment }) => {
    return (
        <div className="place-items-center">
            <div className="flex flex-col mx-6">
                <form onSubmit={addComment}>
                    <TextArea text={comment} setText={setComment} placeholder="Write your comment ?" />
                    <Button text={"Add Comment"} />
                </form>
            </div>
        </div>
    );
};

export default CommentForm;
