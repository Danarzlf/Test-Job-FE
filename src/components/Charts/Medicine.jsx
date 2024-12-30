import dayjs from "dayjs";
import React, { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { PlusIcon, ArrowUpIcon, EllipsisHorizontalIcon ,ArrowDownIcon } from '@heroicons/react/24/outline';

export default function Medicine() {

    const [isOpen, setIsOpen] = useState(false);

    // Fungsi untuk toggle dropdown

  return (
    <div className="col-span-12 rounded-2xl border border-[#DCDFEA] p-5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap mb-5">
            <div className="flex flex-wrap gap-3 sm:gap-5">
              <img src="first-air-kit.svg" alt="" />
              <span className=" font-medium">Medicine supplies</span>
            </div>
            <div className="flex  max-w-45 justify-end">
              <div className="inline-flex items-center">   
          <EllipsisHorizontalIcon  className="w-5 h-5 text-black" />
 

        {/* Dropdown */}
        {isOpen && (
          <div className="absolute  mt-2  bg-white shadow-lg rounded-md border">
            <ul>
              <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Option 1</li>
              <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Option 2</li>
              <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Option 3</li>
            </ul>
          </div>
        )}   
              </div>
            </div>
          </div>
                <table class="w-full bg-white text-sm text-left rtl:text-right text-gray-500 dark:black-gray-400">
                    <thead class="text-xs uppercase bg-white-50 dark:bg-white-700 dark:black-gray-400">
                        <tr className="">
                            <th scope="col" class="px-6 py-3 text-left">
                                NAME
                            </th>
                            <th scope="col" class="px-6 py-3 text-center">
                                STOCK
                            </th>
                            <th scope="col" class="px-6 py-3 text-right ">
                                LAST MONTH
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr class="bg-white dark:bg-white-800 hover:bg-white-50 dark:hover:bg-white-600">
                        <th scope="row" class="py-3 text-left font-medium text-black-900 whitespace-nowrap dark:text-black flex items-center gap-x-2">
                            <img src="medicine-1.png" alt="" class="w-8 h-8" /> {/* Ukuran gambar bisa disesuaikan */}
                            Paracetamol
                        </th>
                            <td class="text-center px-6 py-4">
                                140
                            </td>
                            <td class="px-6 py-4 flex justify-end">
                                <button class="py-custom2px px-custom6px flex items-center gap-1 text-custom12px font-medium text-meta-3 rounded-full text-red-700 bg-red-100 border border-red-400 focus:outline-none hover:bg-red-300 focus:ring-4 focus:ring-red-300">
                                    <ArrowDownIcon className="w-3 h-3 mr-1" />
                                    2.5%
                                </button>
                            </td>
                        </tr>
                        <tr class="bg-white dark:bg-white-800 hover:bg-white-50 dark:hover:bg-white-600">
                        <th scope="row" class="py-3 font-medium text-black-900 whitespace-nowrap dark:text-black flex items-center gap-x-2">
                            <img src="medicine-2.png" alt="" class="w-8 h-8" /> {/* Ukuran gambar bisa disesuaikan */}
                            Anastrozole
                        </th>
                            <td class=" text-center">
                                123
                            </td>
                            <td class="px-6 py-4 flex justify-end">
                                
                                <button className="py-custom2px px-custom6px flex items-center gap-1 text-custom12px font-medium text-meta-3 rounded-full text-green-700 bg-green-100 border border-green-400 focus:outline-none hover:bg-green-300 focus:ring-4 focus:ring-green-300"><ArrowUpIcon className="w-3 h-3 mr-1" />3.5%</button>
                            </td>
                        </tr>
                        <tr class="bg-white dark:bg-white-800 hover:bg-white-50 dark:hover:bg-white-600">
                        <th scope="row" class="py-3 font-medium text-black-900 whitespace-nowrap dark:text-black flex items-center gap-x-2">
                            <img src="medicine-3.png" alt="" class="w-8 h-8" /> {/* Ukuran gambar bisa disesuaikan */}
                            Amoxicillin
                        </th>
                            <td class="px-6 py-4 text-center">
                                80
                            </td>
                            <td class="px-6 py-4 flex justify-end">
                                
                                <button className="py-custom2px px-custom6px flex items-center gap-1 text-custom12px font-medium text-meta-3 rounded-full text-red-700 bg-red-100 border border-red-400 focus:outline-none hover:bg-red-300 focus:ring-4 focus:ring-red-300"><ArrowDownIcon className="w-3 h-3 mr-1" />2.5%</button>
                            </td>
                        </tr>
                        <tr class="bg-white dark:bg-white-800 hover:bg-white-50 dark:hover:bg-white-600">
                        <th scope="row" class="py-3 font-medium text-black-900 whitespace-nowrap dark:text-black flex items-center gap-x-2">
                            <img src="medicine-4.png" alt="" class="w-8 h-8" /> {/* Ukuran gambar bisa disesuaikan */}
                            Bisoprolol
                        </th>
                            <td class="px-6 py-4 text-center">
                                60
                            </td>
                            <td class="px-6 py-4 flex justify-end">
                                
                                <button className="py-custom2px px-custom6px flex items-center gap-1 text-custom12px font-medium text-meta-3 rounded-full text-green-700 bg-green-100 border border-green-400 focus:outline-none hover:bg-green-300 focus:ring-4 focus:ring-green-300"><ArrowUpIcon className="w-3 h-3 mr-1" />3.5%</button>
                            </td>
                        </tr>
                        <tr class="bg-white dark:bg-white-800 hover:bg-white-50 dark:hover:bg-white-600">
                        <th scope="row" class="py-3 font-medium text-black-900 whitespace-nowrap dark:text-black flex items-center gap-x-2">
                            <img src="medicine-5.png" alt="" class="w-8 h-8" /> {/* Ukuran gambar bisa disesuaikan */}
                            Clonidine
                        </th>
                            <td class="px-6 py-4 text-center">
                                54
                            </td>
                            <td class="px-6 py-4 flex justify-end">
                                
                                <button className="py-custom2px px-custom6px flex items-center gap-1 text-custom12px font-medium text-meta-3 rounded-full text-red-700 bg-red-100 border border-red-400 focus:outline-none hover:bg-red-300 focus:ring-4 focus:ring-red-300"><ArrowDownIcon className="w-3 h-3 mr-1" />2.5%</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
       
        </div>
      
  );
}
