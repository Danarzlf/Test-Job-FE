import { useState } from "react";
import {
  ChartBarIcon,
  CalendarIcon,
  CreditCardIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  BellIcon,
  HomeModernIcon,
  ClipboardDocumentCheckIcon,
  ClockIcon,
  UserGroupIcon,
  UserCircleIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
  CogIcon,
  QuestionMarkCircleIcon,
  ArrowLeftOnRectangleIcon,

} from "@heroicons/react/24/outline";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const Menus = [
    { title: "Dashboard", icon: <ChartBarIcon className="w-6 h-6" /> },
    { title: "Schedule", icon: <CalendarIcon className="w-6 h-6" /> },
    { title: "Transaction", icon: <CreditCardIcon className="w-6 h-6" /> },
    { title: "Message", icon: <ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6" /> },
    { title: "Notification", icon: <BellIcon className="w-6 h-6" /> },
    { title: "MANAGEMENT", gap: true },
    { title: "Bedroom", icon: <HomeModernIcon className="w-6 h-6" /> },
    { title: "Medicine", icon: <ClipboardDocumentCheckIcon className="w-6 h-6" /> },
    { title: "Appointment", icon: <ClockIcon className="w-6 h-6" /> },
    { title: "Patient", icon: <UserGroupIcon className="w-6 h-6" /> },
    { title: "Doctor", icon: <UserCircleIcon className="w-6 h-6" /> },
  ];

  return (
<div>
<button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200   dark:focus:ring-gray-600">
   <span className="sr-only">Open sidebar</span>
   <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path clipRule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 border border-customBorder" aria-label="Sidebar">
   <div className="h-full px-3 py-4 overflow-y-auto bg-white-50 ">
      <ul className="space-y-2 font-medium">
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">
               <img src="Logo.png" className="flex-shrink-0 w-10 h-10 text-gray-500 transition duration-75" alt="" />
               <span className="flex-1 ms-3 whitespace-nowrap text-custom20px">Medicore</span>
               {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">2</span> */}
               <Bars3Icon className="inline-flex items-center justify-center w-6 h-6  text-sm font-medium "/>
            </a>
         </li>
         <ul class="pt-0 mt-4 space-y-2 font-medium border border-customBorder">  </ul>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">
            <form class="max-w-md mx-auto">   
               <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
               <div class="relative">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                  </div>
                  <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:focus:ring-blue-500 " placeholder="Search" required />
                  <button type="submit" class="text-black absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">X</button>
               </div>
            </form>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">
               <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
               </svg>
               <span className="ms-3 font-medium font-geist">Dashboard</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">
               <CalendarIcon className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900"/>
               <span className="flex-1 ms-3 font-medium font-geist whitespace-nowrap">Schedule</span>
            </a>
         </li>
         <li>
            <button type="button"  onClick={toggleDropdown} class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 " aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
               <CreditCardIcon className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900"/>
               <span class="flex-1 ms-3 font-medium font-geist text-left rtl:text-right whitespace-nowrap">E-commerce</span>
               <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul
               id="dropdown-example"
               className={`py-2 space-y-2 ${isOpen ? "" : "hidden"}`}
      >
                  <li>
                     <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100">Products</a>
                  </li>
                  <li>
                     <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100">Billing</a>
                  </li>
            </ul>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">
            <ChatBubbleOvalLeftEllipsisIcon className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900"/>
               <span className="flex-1 ms-3 font-medium font-geist whitespace-nowrap">Message</span>
               <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-white bg-orange-300 rounded-full">10</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">
            <BellIcon className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900"/>
               <span className="flex-1 ms-3 font-medium font-geist whitespace-nowrap">Notification</span>
               <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-white bg-orange-300 rounded-full">12</span>
            </a>
         </li>
   
         <li>
            <a href="#" className="flex items-center py-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">
               <span className="flex-1 ms-3 whitespace-nowrap text-custom12px text-[#7D89B0]">MANAGEMENT</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">
            <HomeModernIcon className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900"/>
               <span className="flex-1 ms-3 font-medium font-geist whitespace-nowrap">Bedroom</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">
               <ClipboardDocumentCheckIcon className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900"/>
               <span className="flex-1 ms-3 font-medium font-geist whitespace-nowrap">Medicine</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">
               <ClipboardDocumentCheckIcon className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900"/>
               <span className="flex-1 ms-3 font-medium font-geist whitespace-nowrap">Appointment</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">
            <UserGroupIcon className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900"/>
               <span className="flex-1 ms-3 font-medium font-geist whitespace-nowrap">Patient</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">
            <UserCircleIcon className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900"/>
               <span className="flex-1 ms-3 font-medium font-geist whitespace-nowrap">Doctor</span>
            </a>
         </li>
      </ul>
   </div>
</aside>
</div>

      
  );
};

export default Sidebar;
