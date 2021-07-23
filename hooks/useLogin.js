import { useState, useCallback, useContext } from "react";
import { LOGIN_API_ENDPOINT } from "../utility/constants";
import { magic } from "../lib/magic";
import { UserContext } from "../lib/UserContext";
import Router from "next/router";

const useLogin = () => {
    const [disabled, setDisabled] = useState(false);
    const [email, setEmail] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const { setUser } = useContext(UserContext);

    const login = useCallback(async () => {
        try {
            if (errorMsg) {
                setErrorMsg("");
            }
            setDisabled(true);
            // Trigger Magic link to be sent to user
            let didToken = await magic.auth.loginWithMagicLink({
                email,
                //     redirectURI: new URL("/callback", window.location.origin).href, // optional redirect back to your app after magic link is clicked
            });
            console.log("token: " + didToken);
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", "Bearer " + didToken);
            const requestParams = {
                method: "POST",
                headers: myHeaders,
                body: JSON.stringify({ email }),
                redirect: "follow",
            };
            console.log("Calling Login API");
            const response = await fetch(LOGIN_API_ENDPOINT, requestParams);
            const data = await response.json();
            switch (response["status"]) {
                case 200:
                    if (data) {
                        console.log("logn res: " + JSON.stringify(data["response"]));
                        // Set the UserContext to the now logged in user
                        let userMetadata = await magic.user.getMetadata();
                        console.log("user data: " + JSON.stringify(userMetadata));
                        await setUser({ userMetadata, isSignIn: true });
                        Router.push("/");
                    }
                    break;
                case 401:
                    console.log("Session Expired " + JSON.stringify(data));
                    setErrorMsg(data["response"]["message"]);
                    break;
                default:
                    console.log("The system is temporarily unavailable. Please try again later." + JSON.stringify(data));
                    setErrorMsg("The system is temporarily unavailable. Please try again later.");
            }
        } catch (err) {
            setDisabled(false); // re-enable login button - user may have requested to edit their email
            console.log("Login Error catch " + err);
        }
    }, [email]);

    return {
        email,
        setEmail,
        login,
        errorMsg,
        setErrorMsg,
        disabled,
        setDisabled,
    };
};
export default useLogin;
