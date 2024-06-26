import React from "react";
import hugePhoto from "@/Assets/img/huge-photo.png";

const Hero = () => {
    return (
        <>
            <section class="px-2 py-32  md:px-0 bg-teal-700">
                <div class="container items-center max-w-6xl px-8 mx-auto xl:px-5">
                    <div class="flex flex-wrap items-center sm:-mx-3">
                        <div class="w-full md:w-1/2 md:px-3">
                            <div class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                                <p className="text-3xl text-white font-bold">
                                    Hai, Wargaling!
                                </p>
                                <h1 class="text-4xl font-extrabold tracking-tight text-amber-50 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                                    Daur Sampahmu
                                    <br /> Selamatkan Bumi
                                </h1>
                                <p class="mx-auto text-base text-white sm:max-w-md lg:text-xl md:max-w-3xl">
                                    Mengelola sampah jadi mudah. Jadwalkan
                                    penjemputan terpisah, tukar poin dengan
                                    voucher, dan dukung keberlanjutan
                                    lingkungan.
                                </p>
                                <div class="relative flex flex-col sm:flex-row sm:space-x-4">
                                    <a
                                        href="#_"
                                        class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-orange-500 rounded-md sm:mb-0 hover:bg-yellow-500 sm:w-auto"
                                    >
                                        Setor Yuk
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="w-5 h-5 ml-1"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        >
                                            <line
                                                x1="5"
                                                y1="12"
                                                x2="19"
                                                y2="12"
                                            ></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2">
                            <div class="w-full h-auto overflow-hidden ">
                                <img src={hugePhoto} alt="Huge" className="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
