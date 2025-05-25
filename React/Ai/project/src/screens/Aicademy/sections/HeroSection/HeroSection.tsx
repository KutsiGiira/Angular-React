import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-6 py-16 px-4">
      <div className="flex w-full items-start justify-center">
      <h1 className="font-['Poppins',Helvetica] font-semibold text-5xl text-center leading-[1.5] max-w-3xl mx-auto">
  <span className="text-[#18191b]">Your </span>
  <span className="text-[#8958fe]">AI Augmented LMS</span><br />
  <span className="text-[#18191b]">for a Future–Ready Workforce</span>
</h1>

      </div>

      <div className="text-center w-full">
        <p className="font-['Poppins',Helvetica] font-normal text-[#18191b] text-xl leading-7">
        Bridge the skills gap with a future-proof platform.
        <br />
        <span className="font-bold">AICademy</span> transforms traditional LMS tools into intelligent, adaptive learning ecosystems.</p>
      </div>

      <Button
        variant="outline"
        className="h-12 px-5 rounded-[10px] border-2 border-[#081d3f] bg-transparent"
      >
        <span className="font-['Poppins',Helvetica] font-medium text-[#081d3f] text-lg">
          Book a Demo
        </span>
      </Button>
    </section>
  );
};