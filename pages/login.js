import React, { useState, useContext, useEffect } from "react";
import Router from "next/router";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import Logo from "../components/Logo";
import { magic } from "../lib/magic";
import { UserContext } from "../lib/UserContext";
import Card from "../components/Card";

const login = () => {
    const [disabled, setDisabled] = useState(false);
    const [email, setEmail] = useState("");
    const { setUser } = useContext(UserContext);
    const [error, setError] = useState(null);

    async function handleLoginWithEmail() {
        try {
            if (!email) {
                setError("Please Enter valid Email id");
                return;
            } else {
                if (error) {
                    setError("");
                }
                setDisabled(true);
                console.log("email: " + email);
                // Trigger Magic link to be sent to user
                let didToken = await magic.auth.loginWithMagicLink({
                    email,
                    //     redirectURI: new URL("/callback", window.location.origin).href, // optional redirect back to your app after magic link is clicked
                });

                // Validate didToken with server
                const res = await fetch("/api/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + didToken,
                    },
                });

                if (res.status === 200) {
                    // Set the UserContext to the now logged in user
                    let userMetadata = await magic.user.getMetadata();
                    console.log("user data: " + JSON.stringify(userMetadata));
                    await setUser({ userMetadata, isSignIn: true });
                    Router.push("/");
                }
            }
        } catch (error) {
            setDisabled(false); // re-enable login button - user may have requested to edit their email
            console.log("Error: while making login  request " + error);
        }
    }

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
                <p className="text-danger text-red-600 text-small">{error}</p>
            </Card>
        </div>
    );
};

export default login;
