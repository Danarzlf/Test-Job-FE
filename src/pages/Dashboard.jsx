import React from 'react';
import Sidebar from "../components/Sidebar";
import Sidebar2 from "../components/Sidebar2";
import Statistic from "../components/Statistic";
import ChartOne from '../components/Charts/ChartOne';
import ChartTwo from '../components/Charts/ChartTwo';
import ChartThree from '../components/Charts/ChartThree';
import ChatCard from '../components/Chat/ChatCard';
import Calendar from '../components/Charts/Calendar';
import Medicine from '../components/Charts/Medicine';
import { PlusIcon, ArrowUpIcon } from '@heroicons/react/24/outline';

export default function Dashboard() {
    return (
        <>
        <div className="flex">
            <Sidebar />
            <div className="h-screen flex-1 px-4">
                <header className="h-[68px] top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none border border-black">
                    <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
                        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
                            {/* Hamburger Toggle BTN */}
                            <button className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden">
                                <span className="relative block h-5.5 w-5.5 cursor-pointer">
                                    <span className="du-block absolute right-0 h-full w-full">
                                        <span className="relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white"></span>
                                        <span className="relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white"></span>
                                        <span className="relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white"></span>
                                    </span>
                                    <span className="absolute right-0 h-full w-full rotate-45">
                                        <span className="absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white"></span>
                                        <span className="delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white"></span>
                                    </span>
                                </span>
                            </button>
                        </div>

                        <div className="hidden sm:block">
                            <div className="relative">
                                <button className="absolute left-0 top-1/2 -translate-y-1/2">
                                    <svg className="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z" fill="" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z" fill="" />
                                    </svg>
                                </button>

                                <p>Welcome back, Darrel</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 2xsm:gap-7">
                            {/* User Area */}
                            <div className="flex justify-start">
                                <button className="bg-white hover:bg-black-500 text-black-700 font-semibold hover:text-black py-2 px-4 border border-black-500 hover:border-transparent rounded flex items-center gap-2">
                                    <PlusIcon className="w-5 h-5 text-black" /> {/* Export Icon */}
                                    Export CSV
                                </button>
                            </div>

                            <div className="flex justify-end">
                                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5  flex items-center gap-2">
                                    <PlusIcon className="w-5 h-5 text-white" /> {/* Plus Icon */}
                                    Add new
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                <Statistic/>


                {/* ecommerce */}
                
                {/* ecommerce end */}




                <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
                    <ChartOne />
                    {/* <ChartTwo /> */}
                    {/* <ChatCard/> */}
                    {/* <ChartThree/> */}
                    <Calendar />
                </div>
                <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5 mt-4">
                    <Medicine />
                    <ChartTwo />
                    <ChatCard />
                </div>
            </div>
        </div>
        </>
    );
}
