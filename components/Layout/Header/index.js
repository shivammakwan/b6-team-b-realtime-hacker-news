import { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { UserContext } from "../../../lib/UserContext";
import { magic } from "../../../lib/magic";
import Router from "next/router";

const Header = () => {
    const { user, setUser } = useContext(UserContext);
    const [mobileMenu, showMobileMenu] = useState(false);
    const [showAccount, setShowAccount] = useState(false);
    const showHideMenuOnResize = () => {
        if (window.innerWidth > 767) {
            if (mobileMenu) showMobileMenu(false);
        }
    };

    const handleAccount = () => {
        setShowAccount((prev) => !prev);
    };

    const logout = () => {
        magic.user.logout().then(() => {
            setUser({ user: null });
            Router.push("/");
            setShowAccount((prev) => !prev);
        });
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
                        <div className="py-2 px-5 hover:text-red-500 cursor-pointer">
                            <Link href="/">Home</Link>
                        </div>
                        <div className="py-2 px-5 hover:text-red-500 cursor-pointer">
                            <Link href="/news">News</Link>
                        </div>
                        <div className="py-2 px-5 hover:text-red-500 cursor-pointer">
                            <Link href="/jobs">Jobs</Link>
                        </div>
                        <div className="py-2 px-5 hover:text-red-500 cursor-pointer">
                            <Link href="/asks">Asks</Link>
                        </div>
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
                        {user.isSignIn ? (
                            <div className="relative inline-block text-left cursor-pointer">
                                <div
                                    onClick={handleAccount}
                                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                >
                                    <img src="assets/images/icon/user.svg" width="25" className="hidden md:block mx-2" />
                                </div>

                                {showAccount ? (
                                    <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none justify-items-center items-center">
                                        <div className="py-1">
                                            <div className="text-gray-700 hover:text-red-500 cursor-pointer hover:bg-green-100 block px-4 py-2 text-sm font-normal">
                                                Sign-In as: <span className=" text-xs font-bold">{user.userMetadata.email}</span>
                                            </div>
                                            <hr />
                                            <div
                                                href="#"
                                                className="text-gray-700 hover:text-red-500 cursor-pointer hover:bg-green-100 block px-4 py-2 text-sm font-normal"
                                            >
                                                Profile Details
                                            </div>
                                            <hr />
                                            <button
                                                type="submit"
                                                className="text-gray-700 hover:text-red-500 cursor-pointer hover:bg-green-100  font-semibold block w-full text-left px-4 py-2 text-sm"
                                                onClick={logout}
                                            >
                                                Sign out
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    ``
                                )}
                            </div>
                        ) : (
                            <div className="hidden md:block lg:block text-xl font-medium text-gray-700 py-2 px-5 hover:text-red-500 cursor-pointer">
                                <Link href="/login">Login</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className={`${mobileMenu ? "block" : "hidden"} relative z-10 bg-gray-50 right-0 p-2`}>
                <ul>
                    <li className="p-2 hover:text-red-500 cursor-pointer">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="p-2 hover:text-red-500 cursor-pointer">
                        <Link href="/news">News</Link>
                    </li>
                    <li className="p-2 hover:text-red-500 cursor-pointer">
                        <Link href="/jobs">Jobs</Link>
                    </li>
                    <li className="p-2 hover:text-red-500 cursor-pointer">
                        <Link href="/asks">Asks</Link>
                    </li>
                    {user.isSignIn ? (
                        <>
                            <hr />{" "}
                            <li className="p-2 hover:text-red-500 cursor-pointer">
                                Sign-In as: <span className=" text-xs font-bold">{user.userMetadata.email}</span>
                            </li>
                            <li className="p-2 hover:text-red-500 cursor-pointer">Profile Details</li>
                            <li className="p-2 hover:text-red-500 cursor-pointer" onClick={logout}>
                                Sign out
                            </li>
                        </>
                    ) : (
                        <li className="p-2 hover:text-red-500 cursor-pointer">
                            <Link href="/login">Login</Link>
                        </li>
                    )}
                </ul>
                <hr />
            </div>
        </header>
    );
};

export default Header;
