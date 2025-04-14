import React from "react";

export const FooterSection = (): JSX.Element => {
  // Footer navigation data
  const footerLinks = [
    {
      title: "Explore",
      links: [
        "Aicademy Business",
        "Teach on Aicademy",
        "Get the App",
        "About Us",
        "Contact Us",
      ],
    },
    {
      title: "Resources",
      links: ["Blog", "Help and Support", "Affiliate", "Investors"],
    },
    {
      title: "Company",
      links: [
        "Terms",
        "Privacy Policy",
        "Cookie Settings",
        "Sitemap",
        "Accessibility Statement",
      ],
    },
    {
      title: "Language",
      links: ["English", "French", "Arab"],
    },
  ];

  return (
    <footer className="w-full bg-[#101820] py-8 md:py-12">
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-32">
        {/* Desktop Layout */}
        <div className="hidden md:flex md:flex-row md:justify-between">
          {/* Logo and Copyright for desktop */}
          <div className="flex flex-col justify-start gap-8 ">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8">
                <div className="h-8 overflow-hidden">
                  <div className="w-8 h-8">
                    <div className="h-8">
                      <div className="relative w-8 h-8">
                        <div className="absolute w-3 h-3 top-0 left-[13px] bg-[url(/-lt-radial-repeat-gt--410.png)] bg-[100%_100%]" />
                        <div className="absolute w-2.5 h-[15px] top-[7px] left-[22px] bg-[url(/-lt-radial-repeat-gt--411.png)] bg-[100%_100%]" />
                        <div className="absolute w-[17px] h-2 top-[22px] left-[13px] bg-[url(/-lt-radial-repeat-gt--412.png)] bg-[100%_100%]" />
                        <div className="absolute w-2 h-[17px] top-[15px] left-1.5 bg-[url(/-lt-radial-repeat-gt--413.png)] bg-[100%_100%]" />
                        <div className="absolute w-[15px] h-2.5 top-[7px] left-0 bg-[url(/-lt-radial-repeat-gt--414.png)] bg-[100%_100%]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="w-[116px] h-6"
                alt="Aicademy"
                src="/aicademy-3.png"
              />
            </div>
            <div className="font-normal text-white text-xs tracking-[0] leading-5">
              © Copyright 2024 - AI Academy
            </div>
          </div>

          {/* Navigation columns for desktop */}
          {footerLinks.map((column, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="font-medium text-[#46b8ff] text-base leading-6 mb-6 font-['Poppins',Helvetica] tracking-[0]">
                {column.title}
              </h3>
              <div className="flex flex-col space-y-4">
                {column.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href="#"
                    className="font-light text-white text-sm leading-6 whitespace-nowrap font-['Poppins',Helvetica] tracking-[0] hover:text-[#46b8ff] transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Mobile - Logo at the top */}
          <div className="flex items-center gap-3 mb-8 justify-center">
            <div className="relative w-8 h-8">
              <div className="h-8 overflow-hidden">
                <div className="w-8 h-8">
                  <div className="h-8">
                    <div className="relative w-8 h-8">
                      <div className="absolute w-3 h-3 top-0 left-[13px] bg-[url(/-lt-radial-repeat-gt--410.png)] bg-[100%_100%]" />
                      <div className="absolute w-2.5 h-[15px] top-[7px] left-[22px] bg-[url(/-lt-radial-repeat-gt--411.png)] bg-[100%_100%]" />
                      <div className="absolute w-[17px] h-2 top-[22px] left-[13px] bg-[url(/-lt-radial-repeat-gt--412.png)] bg-[100%_100%]" />
                      <div className="absolute w-2 h-[17px] top-[15px] left-1.5 bg-[url(/-lt-radial-repeat-gt--413.png)] bg-[100%_100%]" />
                      <div className="absolute w-[15px] h-2.5 top-[7px] left-0 bg-[url(/-lt-radial-repeat-gt--414.png)] bg-[100%_100%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="w-[116px] h-6"
              alt="Aicademy"
              src="/aicademy-3.png"
            />
          </div>

          {/* Mobile - 2×2 Grid Layout for navigation */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-8">
            {footerLinks.map((column, index) => (
              <div key={index} className="flex flex-col">
                <h3 className="font-semibold text-[#46b8ff] text-base leading-6 mb-4 font-['Poppins',Helvetica] tracking-[0]">
                  {column.title}
                </h3>
                <div className="flex flex-col space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href="#"
                      className="font-medium text-white text-sm leading-5 whitespace-nowrap font-['Poppins',Helvetica] tracking-[0]"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile - Copyright at the bottom */}
          <div className="mt-8">
            <div className="font-normal text-white text-xs tracking-[0] leading-5 flex justify-center">
              © Copyright 2024 - AI Academy
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};