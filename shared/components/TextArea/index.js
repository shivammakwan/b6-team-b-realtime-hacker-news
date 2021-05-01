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
                className="mx-2 bg-gray-100 rounded-md mb-1 text-left pl-4 text-2xl shadow-lg lg:text-base"
                rows="5"
                cols="50"
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
