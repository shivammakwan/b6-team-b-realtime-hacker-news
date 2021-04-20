import { useEffect, useState } from "react";

export default function Questions() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("/api/asks/questions")
            .then((res) => res.json())
            .then((jsonData) => {
                console.log(jsonData);
                setPosts(jsonData.data);
            });
    }, []);

    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-5 my-5">
            {posts.map((item) => (
                <article class="rounded-2xl border border-gray-200 mx-5">
                    <div>
                        <img class="rounded-t-2xl w-full" src={item.image} />
                    </div>
                    <dt class="p-5">
                        <div class="flex justify-between items-center h-1/2">
                            <span class="text-pink-500 bg-red-100 font-bold px-4 py-1 rounded-md text-base"> {item.section} </span>
                            <div class="text-base flex justify-center place-items-center sm:text-xs">
                                <svg
                                    class="h-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
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
                                {item.time}
                            </div>
                        </div>
                        <div class="pt-4 h-1/2">
                            <span class="font-semibold text-xl">{item.title}</span>
                            <h3 class="font-thin text-justify">{item.description}</h3>
                        </div>
                    </dt>
                </article>
            ))}
        </ul>
    );
}
