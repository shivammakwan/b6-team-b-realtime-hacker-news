import React, { useContext } from "react";
import Link from "next/link";
import { UserContext } from "../../lib/UserContext";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { Icon } from "@material-ui/core";
import useVote from "../../hooks/useVote";

function NewsPost({
    id,
    title = "Title",
    description = "Description",
    author = "Author",
    noOfComments = 0,
    noOfPoints = 0,
    postDate = "Date",
    postImage = "assets/images/news-post-bg.jpg",
    postUrl = "",
    hideDesc = false,
}) {
    const { user, setUser } = useContext(UserContext);
    const handlePostUrl = () => {
        if (postUrl !== "") {
            window.open(postUrl, "_blank");
        }
    };
    const { onUpVote, upVote, onUnVote, voteCount, commentCount } = useVote(id);

    return (
        <div className="w-full md:w-1/2 lg:w-1/4 p-3">
            <div className="rounded-lg border shadow-md hover:shadow-lg">
                <div className="relative overflow-y-hidden" style={{ minHeight: "210px", maxHeight: "210px" }}>
                    <img
                        src={postImage}
                        onError={(ev) => {
                            ev.target.src = "assets/images/news-post-bg.jpg";
                        }}
                        className="rounded-tl-lg rounded-tr-lg"
                        style={{ minHeight: "210px" }}
                    />
                    <span className="absolute top-2 bg-green-400 text-white py-1 px-2 text-xs rounded-tr-sm rounded-br-md">
                        {voteCount} Points
                    </span>
                </div>
                <div className="p-5 rounded-bl-lg rounded-br-lg bg-white">
                    <div className="flex justify-between">
                        <span className="text-xs text-red-400 font-bold">{postDate}</span>
                        <Link href={user.isSignIn ? `/comments/${id}` : `/login`}>
                            <span className="text-xs text-gray-600 font-semibold cursor-pointer">{commentCount} Comments</span>
                        </Link>
                    </div>
                    <div className="flex justify-between">
                        <span className="flex">
                            {!upVote ? (
                                <Icon onClick={onUpVote}>
                                    {" "}
                                    <ArrowDropUpIcon className="cursor-pointer" />
                                </Icon>
                            ) : (
                                <p className="text-sm text-green-400 mt-2 font-bold bold cursor-pointer" onClick={onUnVote}>
                                    Unvote
                                </p>
                            )}
                        </span>
                        <span className="mt-1 text-sm text-right text-gray-500 font-medium">{author}</span>
                    </div>
                    <h1 className="mt-2 text-black font-bold cursor-pointer" onClick={handlePostUrl}>
                        {title}
                    </h1>
                    {!hideDesc && (
                        <p className="text-gray-500 text-sm mt-3">
                            {description.length < 100 ? description : description.substr(0, 100) + "..."}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default NewsPost;
