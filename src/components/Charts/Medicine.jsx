import dayjs from "dayjs";
import React, { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { PlusIcon, ArrowUpIcon, EllipsisHorizontalIcon  } from '@heroicons/react/24/outline';

export default function Medicine() {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="flex justify-center w-full">
        <div className="w-96 h-96 px-0 py-2">
          <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
            <div className="flex w-full flex-wrap gap-3 sm:gap-5">
              <img src="pill.svg" alt="" />
              <span className="text-[18] font-medium">Medicines supplies</span>
            </div>
            <div className="flex w-full max-w-45 justify-end">
              <div className="inline-flex items-center">    
                  <EllipsisHorizontalIcon className="w-5 h-5 text-black" />   
              </div>
            </div>
          </div>
                <table class="w-full bg-white text-sm text-left rtl:text-right text-gray-500 dark:black-gray-400">
                    <thead class="text-xs uppercase bg-white-50 dark:bg-white-700 dark:black-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                NAME
                            </th>
                            <th scope="col" class="px-6 py-3">
                                STOCK
                            </th>
                            <th scope="col" class="px-6 py-3">
                                LAST MONTH
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-white-800 dark:border-gray-700 hover:bg-white-50 dark:hover:bg-white-600">
                            <th scope="row" class="px-6 py-4 font-medium text-black-900 whitespace-nowrap dark:text-black">
                                Parachetamol
                            </th>
                            <td class="px-6 py-4">
                                140
                            </td>
                            <td class="px-6 py-4">
                                2.5%
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-white-800 dark:border-gray-700 hover:bg-white-50 dark:hover:bg-white-600">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 space-nowrap dark:text-black">
                                Microsoft Surface Pro
                            </th>
                            <td class="px-6 py-4">
                                White
                            </td>
                            <td class="px-6 py-4">
                                Laptop PC
                            </td>
                        </tr>
                        <tr class="bg-white dark:bg-white-800 hover:bg-white-50 dark:hover:bg-white-600">
                            <th scope="row" class="px-6 py-4 font-medium text-black-900 whitespace-nowrap dark:text-black">
                                Magic Mouse 2
                            </th>
                            <td class="px-6 py-4">
                                Black
                            </td>
                            <td class="px-6 py-4">
                                Accessories
                            </td>
                        </tr>
                    </tbody>
                </table>
       
        </div>
      </div>
    </div>
  );
}
