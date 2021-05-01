import React from "react";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

const CommentCard = ({comment, userName}) => {


    const lg= 'large';

    return (
        <div className="flex flex-col border border-gray rounded-lg mx-6 shadow py-auto p-1 my-2">
            <div className="flex ml-6">
                <p className="text-xs">{userName}</p>
            </div>
            <div className="flex">
                <ArrowDropUpIcon className="ml-4" />
                <p className="ml-4 text-base">
                   {comment}
                </p>
            </div>
        </div>
    );
};

export default CommentCard;
