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
    <footer className="w-full bg-[#101820] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo section */}
          <div className="flex flex-col space-y-4">
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
            <div className="font-normal text-white text-xs tracking-[0] leading-5 mt-16">
              © Copyright 2024 - AI Academy
            </div>
          </div>

          {/* Navigation columns */}
          {footerLinks.map((column, index) => (
            <div key={index} className="flex flex-col space-y-6">
              <h3 className="font-semibold text-[#46b8ff] text-base leading-6 font-['Poppins',Helvetica] tracking-[0]">
                {column.title}
              </h3>
              <div className="flex flex-col space-y-4">
                {column.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href="#"
                    className="font-medium text-white text-sm leading-6 whitespace-nowrap font-['Poppins',Helvetica] tracking-[0] hover:text-[#46b8ff] transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
