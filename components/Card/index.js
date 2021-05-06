import React from "react";

const Card = (props) => {
    return (
        <div className=" w-10/12 md:w-5/12 m-5 bg-gray-200 pt-8 pb-4 px-4 rounded-lg shadow-xl ring-4 ring-green-200 items-center justify-center">
            {props.children}
        </div>
    );
};

export default Card;
