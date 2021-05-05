import React from "react";

const TextArea = ({
    text,
    setText,
    placeholder = "",
    isAutoFocus = true,
    required = false,
    upperCase = false,
    requiredMsg = "Required",
    check = false,
}) => {
    return (
        <div>
            <textarea
                className="bg-gray-100 rounded-md mb-1 text-left pl-4 text-2xl shadow-lg lg:text-base ml-2"
                rows="4"
                cols="49"
                type="text"
                placeholder={placeholder}
                value={text}
                onChange={({ target: { value } }) => {
                    setText(value);
                }}
                required={required}
            />
            {check ? required && !text ? <div className="text-primary mx-8">{requiredMsg} </div> : null : null}
        </div>
    );
};
export default TextArea;
