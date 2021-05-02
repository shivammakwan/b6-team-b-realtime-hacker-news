import "../styles/theme.css";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import MainLayout from "../components/Layout/index";
import { UserProvider } from "../lib/UserContext";

function MyApp({ Component, pageProps }) {
    return (
        <UserProvider>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </UserProvider>
    );
}

export default MyApp;
