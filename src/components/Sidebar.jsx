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
      <div
        className={`${
          open ? "w-72" : "w-20"
        } bg-white-x h-screen p-5 pt-4 relative duration-300 flex flex-col`} // Sidebar menggunakan flex-col
      >
        {/* Toggle Button */}
        <Bars3Icon
          className={`absolute cursor-pointer right-6 top-6 w-7 h-7 ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        {/* Header */}
        <div className="flex gap-x-4 items-center ">
          <img
            src="Logo.png"
            className={`w-9 cursor-pointer duration-500 ${!open && "scale-0"}`}
          />
          <h1
            className={`text-black origin-left font-medium text-custom20px duration-200 ${
              !open && "scale-0"
            }`}
          >
            Medicore
          </h1>
        </div>

        {/* Menu Items */}
        <ul className="pt-6 flex-grow"> {/* flex-grow untuk mengisi ruang */}
          <div className={`flex items-center p-2 rounded-md bg-white mt-4 mb-5 ${!open && "hidden"}`}>
            <MagnifyingGlassIcon className="w-6 h-6 text-black-500 mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="bg-white border-none w-full text-gray-600 placeholder-gray-500 outline-none"
            />
          </div>
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex justify-between items-center rounded-md p-2 cursor-pointer hover:bg-gray-200 text-gray-600 text-custom16px gap-x-4 
              ${Menu.gap ? "mt-4" : "mt-1"} ${index === 0 && "bg-gray-200"}`}
            >
              {/* Ikon dan Teks */}
              <div className="flex items-center gap-x-4">
                {Menu.icon}
                <span className={`${!open && "hidden"} origin-left duration-200`}>
                  {Menu.title}
                </span>
              </div>
              {/* Panah hanya untuk menu Transaction */}
              {Menu.title === "Transaction" && open && (
               <span className="text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 8.25l7.5 7.5 7.5-7.5"
                  />
                </svg>
             </span>
             
              )}
            </li>
          ))}
        </ul>

        {/* Menu Setting di bagian bawah */}
        <div className="mt-auto"> {/* mt-auto untuk memastikan berada di bawah */}
          <li className="flex justify-between items-center rounded-md p-2 cursor-pointer hover:bg-gray-200 text-gray-600 text-custom16px gap-x-4">
            <div className="flex items-center gap-x-4">
              <CogIcon className="w-6 h-6" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Settings
              </span>
            </div>
          </li>
          <li className="flex justify-between items-center rounded-md p-2 cursor-pointer hover:bg-gray-200 text-gray-600 text-custom16px gap-x-4">
            <div className="flex items-center gap-x-4">
              <QuestionMarkCircleIcon className="w-6 h-6" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Help & Support
              </span>
            </div>
          </li>
          <li className="flex justify-between items-center rounded-md p-2 cursor-pointer hover:bg-gray-200 text-gray-600 text-custom16px gap-x-4 mt-4 ">
            <div className="flex items-center gap-x-4">
                <img
                src="Avatar.png"
                className="w-7 cursor-pointer duration-500"
                />
                <div className="flex flex-col">
                <span className={`${!open && "hidden"} text-custom14px origin-left duration-200`}>
                    Medicore
                </span>
                {/* Admin text with smaller font size */}
                <span className="text-xs text-gray-500">Admin</span>
                </div>
            </div>
            {/* Replaced the arrow icon with the logout icon */}
            <span className="text-black-400">
                <ArrowLeftOnRectangleIcon className="w-5 h-5" />
            </span>
        </li>

        </div>
      </div>
      
  );
};

export default Sidebar;
