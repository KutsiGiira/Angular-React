import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../../../components/ui/navigation-menu";

export const HeaderSection = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { label: "Who We Are", width: "150px" },
    { label: "Features", width: "150px" },
    { label: "Use Cases", width: "150px" },
  ];

  return (
    <header className="flex flex-col w-full items-start bg-transparent">
      <div className="flex w-full h-20 items-start justify-center p-4 bg-[#081d3f]">
        <div className="flex w-full items-center justify-center gap-2 px-[100px] py-0">
          {/* Logo section */}
          <div className="inline-flex items-center gap-3">
            <div className="relative w-8 h-8">
              <div className="h-8 overflow-hidden">
                <div className="w-8 h-8">
                  <div className="h-8">
                    <div className="relative w-8 h-8">
                      <div className="absolute w-3 h-3 top-0 left-[13px] bg-[url(/-lt-radial-repeat-gt-.png)] bg-[100%_100%]" />
                      <div className="absolute w-2.5 h-[15px] top-[7px] left-[22px] bg-[url(/-lt-radial-repeat-gt--1.png)] bg-[100%_100%]" />
                      <div className="absolute w-[17px] h-2 top-[22px] left-[13px] bg-[url(/-lt-radial-repeat-gt--2.png)] bg-[100%_100%]" />
                      <div className="absolute w-2 h-[17px] top-[15px] left-1.5 bg-[url(/-lt-radial-repeat-gt--3.png)] bg-[100%_100%]" />
                      <div className="absolute w-[15px] h-2.5 top-[7px] left-0 bg-[url(/-lt-radial-repeat-gt--4.png)] bg-[100%_100%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <img
              className="relative w-[116px] h-6"
              alt="Aicademy"
              src="/aicademy.png"
            />
          </div>

          {/* Navigation menu */}
          <NavigationMenu className="flex items-center justify-center gap-2 flex-1 grow">
            <NavigationMenuList className="flex">
              {navItems.map((item, index) => (
                <NavigationMenuItem
                  key={index}
                  className={`flex w-[${item.width}] items-center justify-center`}
                >
                  <NavigationMenuTrigger className="inline-flex justify-center gap-[9.92px] pl-[13px] pr-3 py-3 rounded-full items-center bg-transparent hover:bg-transparent focus:bg-transparent">
                    <span className="relative w-fit mt-[-1.00px] font-['Poppins',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                      {item.label}
                    </span>
                    <ChevronDownIcon className="h-3 w-3 text-white" />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    {/* Content would go here */}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <Button className="inline-flex self-stretch items-center gap-2 px-5 py-0 bg-[#8958fe] hover:bg-[#8958fe]/90 rounded-[10px]">
            <span className="font-['Poppins',Helvetica] font-semibold text-white text-sm tracking-[0] leading-5 whitespace-nowrap">
              Get Notified
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};
