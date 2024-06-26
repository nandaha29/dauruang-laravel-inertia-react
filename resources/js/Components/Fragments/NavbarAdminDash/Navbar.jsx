import React from "react";
import iconLogo from "@/Assets/icons/logo-dauruang.png";
import { Link, usePage } from "@inertiajs/react";

function Navbar({ children }) {
    const { component } = usePage();
    const { auth } = usePage().props;
    return (
        <>
            <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 d">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <img
                                    src={iconLogo}
                                    alt="Logo"
                                    className=" h-12"
                                />
                            </div>
                        </div>
                        <h1
                            // href="#"
                            className="font-bold text-gray-500 hover:text-green-700 rounded-md px-2 pt-3 text-center"
                            // aria-current="page"
                        >
                            {/* Hola, {auth.user.name} */}
                            {/* ini error kenapa coba */}
                        </h1>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4 pt-4">
                                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}

                                    <Link
                                        href="/dashboard"
                                        className=" text-gray-500 hover:text-green-700 rounded-md px-2 py-2 text-base font-medium"
                                        aria-current="page"
                                    >
                                        Beranda
                                    </Link>
                                    <Link
                                        href="/admindashboard"
                                        className=" text-gray-500 hover:text-green-700 rounded-md px-2 py-2 text-base font-medium"
                                        aria-current="page"
                                    >
                                        Admin Dash
                                    </Link>
                                    {/* <Link
                                        href="/wastes"
                                        className=" text-gray-500 hover:text-green-700 rounded-md px-2 py-2 text-base font-medium"
                                        aria-current="page"
                                    >
                                        Ontest
                                    </Link> */}
                                    {/* <Link
                                        href="/voucher"
                                        className=" text-gray-500 hover:text-green-700 rounded-md px-2 py-2 text-base font-medium"
                                        aria-current="page"
                                    >
                                        Voucher
                                    </Link>
                                    <Link
                                        href="/nasabah"
                                        className=" text-gray-500 hover:text-green-700 rounded-md px-2 py-2 text-base font-medium"
                                        aria-current="page"
                                    >
                                        Nasabah
                                    </Link> */}
                                    <a
                                        href="/admindashboard"
                                        aria-current="page"
                                    >
                                        <button
                                            type="button"
                                            class="focus:outline-none text-white bg-teal-800 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-teal-800 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
                                        >
                                            Logout
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sm:hidden" id="mobile-menu">
                    <div class="space-y-1 px-2 pb-3 pt-2">
                        <a
                            href="/"
                            className=" text-gray-500 hover:violet-500 rounded-md px-2 py-2 text-sm font-medium"
                            aria-current="page"
                        >
                            Beranda
                        </a>
                        <a
                            href="/blog"
                            className=" text-gray-500 hover:violet-500 rounded-md px-2 py-2 text-sm font-medium"
                            aria-current="page"
                        >
                            Blog Edukasi
                        </a>
                        <a
                            href="/"
                            className=" text-gray-500 hover:violet-500 rounded-md px-2 py-2 text-sm font-medium"
                            aria-current="page"
                        >
                            Tentang Kami
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Navbar;
