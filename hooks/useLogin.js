import { useState, useCallback } from "react";
import { LOGIN_API_ENDPOINT } from "../utility/constants";

const useLogin = () => {
    const [email, setEmail] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const login = useCallback(
        async (idToken) => {
            try {
                if (errorMsg) setErrorMsg("");
                const myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                myHeaders.append("Authorization", "Bearer " + idToken);
                const requestParams = {
                    method: "POST",
                    headers: myHeaders,
                    body: JSON.stringify({ email }),
                    redirect: "follow",
                };
                const response = await fetch(LOGIN_API_ENDPOINT, requestParams);
                const result = await response.json();
                switch (response["status"]) {
                    case 200:
                        if (result) console.log("result " + result);
                        break;
                    default:
                        console.log("default result " + result);
                }
            } catch (err) {
                console.log("Login Error catch " + err);
            }
        },
        [email]
    );

    return {
        email,
        setEmail,
        login,
        errorMsg,
        setErrorMsg,
    };
};
export default useLogin;
