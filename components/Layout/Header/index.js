import { useEffect, useState } from "react";

const Header = () => {
    const [mobileMenu, showMobileMenu] = useState(false);

    const showHideMenuOnResize = () => {
        if (window.innerWidth > 767) {
            if (mobileMenu) showMobileMenu(false);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", showHideMenuOnResize);

        return () => {
            window.removeEventListener("resize", showHideMenuOnResize);
        };
    }, []);

    return (
        <header>
            <div className="hn-header-area p-3 bg-gray-50">
                <div className="flex justify-between">
                    <div>
                        <img src="assets/images/logo-light.png" width="200" className="" />
                    </div>
                    <div className="hidden w-full md:flex justify-center text-xl font-medium text-gray-700">
                        <div className="py-2 px-5 hover:text-red-500 cursor-pointer">Home</div>
                        <div className="py-2 px-5 hover:text-red-500 cursor-pointer">News</div>
                        <div className="py-2 px-5 hover:text-red-500 cursor-pointer">Jobs</div>
                        <div className="py-2 px-5 hover:text-red-500 cursor-pointer">Asks</div>
                    </div>
                    <div className="flex justify-end" style={{ width: "150px" }}>
                        <img src="assets/images/icon/search.svg" width="25" className="mx-2" />
                        <img
                            src="assets/images/icon/menu.svg"
                            width="25"
                            className="md:hidden lg:hidden mx-2"
                            onClick={() => {
                                if (mobileMenu) {
                                    showMobileMenu(false);
                                } else {
                                    showMobileMenu(true);
                                }
                            }}
                        />
                        <img src="assets/images/icon/user.svg" width="25" className="hidden md:block mx-2" />
                    </div>
                </div>
            </div>
            <div className={`${mobileMenu ? "block" : "hidden"} fixed bg-gray-50 right-0 p-2`}>
                <ul>
                    <li className="p-2 hover:text-red-500 cursor-pointer">Home</li>
                    <li className="p-2 hover:text-red-500 cursor-pointer">News</li>
                    <li className="p-2 hover:text-red-500 cursor-pointer">Jobs</li>
                    <li className="p-2 hover:text-red-500 cursor-pointer">Asks</li>
                </ul>
                <hr />
                <button className="inline-flex justify-items-center p-2 hover:text-red-500 cursor-pointer">
                    <img src="assets/images/icon/user.svg" width="20" className="my-auto" />
                    <span className="ml-2">My Account</span>
                </button>
            </div>
        </header>
    );
};

export default Header;
