import React from "react";

export const FeatureSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center px-4 py-12 w-full">
      <div className="max-w-[900px] w-full mx-auto flex flex-col items-center">
        {/* Decorative icon */}
        <div className="relative w-8 h-8 mb-8">
          <div className="absolute w-3 h-3 top-0 left-[13px] bg-[url(/-lt-radial-repeat-gt--5.png)] bg-[100%_100%]" />
          <div className="absolute w-2.5 h-[15px] top-[7px] left-[22px] bg-[url(/-lt-radial-repeat-gt--6.png)] bg-[100%_100%]" />
          <div className="absolute w-[17px] h-2 top-[22px] left-[13px] bg-[url(/-lt-radial-repeat-gt--7.png)] bg-[100%_100%]" />
          <div className="absolute w-2 h-[17px] top-[15px] left-1.5 bg-[url(/-lt-radial-repeat-gt--8.png)] bg-[100%_100%]" />
          <div className="absolute w-[15px] h-2.5 top-[7px] left-0 bg-[url(/-lt-radial-repeat-gt--9.png)] bg-[100%_100%]" />
        </div>

        {/* Section title */}
        <h2 className="font-['Poppins',Helvetica] font-medium text-[#18191b] text-4xl text-center tracking-[0] leading-10 mb-8">
          What is Aicademy?
        </h2>

        {/* Section description */}
        <p className="font-['Poppins',Helvetica] font-normal text-neutral-700 text-lg text-center tracking-[0] leading-7">
          Aicademy is a fully customizable white-label LMS (Learning Management
          System) enhanced with advanced AI features. Whether you&#39;re
          onboarding new hires, upskilling teams, or training clients, Aicademy
          helps you deliver content efficiently and intelligently.
        </p>
      </div>
    </section>
  );
};