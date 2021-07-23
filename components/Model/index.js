import React from "react";

const Model = (props) => {
    return (
        <div class="md:w-1/3 sm:w-full rounded-lg shadow-lg bg-white my-3">
            <div class="flex justify-between border-b border-gray-100 px-5 py-4">
                <div>
                    <i class="fa fa-exclamation-triangle text-red-500"></i>
                    <span class="font-bold text-gray-700 text-lg">Error</span>
                </div>
                <div>
                    <button>
                        <i class="fa fa-times-circle text-red-500 hover:text-red-600 transition duration-150"></i>
                    </button>
                </div>
            </div>

            <div class="px-10 py-5 text-gray-600">{props.message}</div>

            <div class="px-5 py-4 flex justify-end">
                <button class="text-sm py-2 px-3 text-gray-500 hover:text-gray-600 transition duration-150">OK</button>
            </div>
        </div>
    );
};

export default Model;
