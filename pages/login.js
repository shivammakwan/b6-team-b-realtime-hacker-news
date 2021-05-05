import React from "react";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import Logo from "../components/Logo";
import Card from "../components/Card";
import useLogin from "../hooks/useLogin";

const login = () => {
    const { email, setEmail, errorMsg, setErrorMsg, disabled, login } = useLogin();

    const handleLoginWithEmail = () => {
        if (!email) {
            setErrorMsg("Please Enter valid Email id");
            return;
        } else {
            login();
        }
    };

    return (
        <div className="flex flex-col justify-center items-center w-screen h-screen">
            <Card>
                <Logo />
                <TextInput
                    text={email}
                    setText={setEmail}
                    disabled={disabled}
                    placeholder={"Enter your email"}
                    requiredMsg={`Please type valid Email Id`}
                />
                <Button className=" grid place-items-center ml-8" text={"Login"} onClick={() => handleLoginWithEmail()} />
                <p className="text-danger text-red-600 text-small">{errorMsg}</p>
            </Card>
        </div>
    );
};

export default login;
