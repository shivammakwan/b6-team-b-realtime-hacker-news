import React from "react";
import Link from "next/link";
const TopItem = ({ imageUrl, date, title, id, posturl }) => {
    return (
        <Link href={posturl} passHref={true}>
            <div key={id} className="flex flex-col w-full md:w-8/12 lg:w-8/12 rounded-2xl  cursor-pointer justify-end m-2">
                <div className=" z-10 relative overflow-hidden rounded-2xl w-full">
                    <img
                        src={imageUrl}
                        className=" rounded-2xl bg-gray-800 text-gray-100 scale-100 transform hover:transition duration-500 hover:scale-150"
                    />
                </div>
                <div className="absolute  z-30 mb-4 py-5  pl-5 px-2 text-left">
                    <div className="flex flex-row items-center mt-2">
                        <svg
                            className="h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-1 mt-1 text-lg font-serif text-yellow-100 hover:text-green-100"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="{2}"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                        </svg>
                        <span className="ml-1 mt-1 text-xs md:text-sm font-serif text-yellow-100 hover:text-green-100">{date}</span>
                    </div>
                    <h1 className="text-xs px-2 font-bold md:text-sm lg:text-lg text-white hover:text-red-500">
                        {title.length < 82 ? title : title.substr(0, 82) + "..."}
                    </h1>
                </div>
            </div>
        </Link>
    );
};

export default TopItem;
