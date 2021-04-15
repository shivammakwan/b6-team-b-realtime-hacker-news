import React from "react";

function NewsPost() {
    return (
        <div className="w-full md:w-1/2 lg:w-1/4 p-3">
            <div className="rounded-lg border hover:shadow-md">
                <div className="relative">
                    <img
                        src="assets/images/news-post-bg.jpg"
                        onError={(ev) => {
                            ev.target.src = "assets/images/news-post-bg.jpg";
                        }}
                        className="rounded-tl-lg rounded-tr-lg"
                    />
                    <span className="absolute top-2 bg-green-400 text-white py-1 px-2 text-xs rounded-tr-sm rounded-br-md">100 Points</span>
                </div>
                <div className="p-5 rounded-bl-lg rounded-br-lg bg-white">
                    <div className="flex justify-between">
                        <span className="text-xs text-red-400 font-bold">15-04-2021</span>
                        <span className="text-xs text-gray-600 font-semibold">0 Comments</span>
                    </div>
                    <h1 className="mt-1 text-sm text-right text-gray-800 font-medium">Author Name</h1>
                    <h1 className="mt-2 text-black font-bold">Some Title</h1>
                    <p className="text-gray-500 text-sm mt-3">Some Description</p>
                </div>
            </div>
        </div>
    );
}

export default NewsPost;
