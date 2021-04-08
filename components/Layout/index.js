import Footer from "./Footer";
import Header from "./Header";

const MainLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Header />
            <main className="h-full">{children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;
