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
        <div className="my-3 mx-2">
            <textarea
                className="bg-gray-100 rounded-md w-96 h-8 mb-1 text-left pl-4 text-2xl shadow-lg lg:text-sm w-full h-full"
                rows="10"
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
