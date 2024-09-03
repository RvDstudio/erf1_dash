"use client";
import { ArrowLeftSquareIcon, Tractor, Milk } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menus } from "../constants/constants";
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "./ui/tooltip";
import { useState, useRef } from "react";

const Sidebar = () => {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;
  const [open, setOpen] = useState<boolean>(true);

  return (
    <div
      className={`${
        open ? "w-64" : "w-16 hidden md:block"
      } bg-[#374C69] dark:bg-[#171717] border-r border-light-white dark:border-[#2e2e2e] h-screen p-3 pt-4 relative duration-300 z-40`}
    >
      <ArrowLeftSquareIcon
        onClick={() => setOpen(!open)}
        className={`text-white absolute -right-3 bg-[#374c69] top-5 cursor-pointer z-50 ${
          !open && "rotate-180"
        }`}
      />
      <div className="flex gap-x-2 items-center border-b pb-[11px]">
        <Tractor
          className={`text-white dark:text-white cursor-pointer duration-500 h-7 w-7`}
        />
        <h1
          className={`text-white dark:text-white origin-left font-medium text-[22px] duration-200 ${
            !open && "scale-0 hidden"
          }`}
        >
          Erf1<span className="text-[#6699CC]"> Bestellingen</span>
        </h1>
      </div>

      <ul className="pt-6 space-y-2">
        {Menus.map((menu, index) => (
          <div key={index}>
            {menu.gap && (
              <div className="my-4 border-t border-dashed border-[#6699CC] dark:border-gray-600" />
            )}
            <li className="">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      className={`w-full flex items-center space-x-2 hover:bg-[#6699CC] dark:hover:bg-[#292929] active:bg-gray-300 py-2 px-2 rounded-lg text-[#9c9c9c] ${
                        isActive(menu.path)
                          ? "bg-[#6699CC] text-white dark:bg-[#292929]"
                          : ""
                      }`}
                      href={menu.path}
                    >
                      {menu.icon && (
                        <span className="mr-0.5 text-white dark:text-[#888888]">
                          {menu.icon}
                        </span>
                      )}
                      <span
                        className={`${
                          !open && "hidden"
                        } origin-left duration-200 flex items-center w-full`}
                      >
                        <div className="flex relative items-center w-full">
                          <div className="">{menu.title}</div>
                          <div className="absolute right-2 top-1">
                            {!!menu.notification && (
                              <div className="text-xs text-white bg-[#3685a1] rounded-[4px] h-4 w-7 flex justify-center items-center">
                                {menu.notification}
                              </div>
                            )}
                          </div>
                        </div>
                      </span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>{menu.title}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          </div>
        ))}
      </ul>

      <div className="bg-[#415978] dark:bg-[#292929] absolute bottom-0 left-0 w-full">
        <div
          className={`${
            !open && "justify-center"
          } flex items-center gap-x-4 p-4 border-[#6699CC] border-t border-b border-dashed`}
        >
          <Milk className="text-[#6699CC] w-8 h-8" />
          <div className={`${!open && "hidden"} text-sm`}>
            <h2 className="text-[#bababa] font-bold">Reinier Varkevisser</h2>
            <p className="text-[#6699cc] text-[12px] font-bold">
              developer / Admin
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
