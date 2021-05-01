import "../styles/theme.css";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import MainLayout from "../shared/components/Layout";

function MyApp({ Component, pageProps }) {
    return (
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
    );
}

export default MyApp;
