import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-4xl mx-auto items-center gap-6 py-12">
      <div className="flex w-full items-start justify-center px-6">
        <h1 className="font-['Poppins',Helvetica] font-semibold text-5xl text-center leading-[72px] tracking-tight">
          <span className="text-[#18191b]">The </span>
          <span className="text-[#8958fe]">AI Era</span>
          <span className="text-[#18191b]">
            {" "}
            is here, upskill yourself and your team to stay in the game
          </span>
        </h1>
      </div>

      <div className="text-center px-4">
        <p className="font-['Poppins',Helvetica] font-normal text-[#18191b] text-xl leading-7">
          Empower Your Team with AI-Driven Learning
          <br />
          Custom LMS for modern businesses. Powered by advanced AI.
        </p>
      </div>

      <Button
        variant="outline"
        className="h-12 px-5 rounded-[10px] border-2 border-[#081d3f] bg-transparent"
      >
        <span className="font-['Poppins',Helvetica] font-medium text-[#081d3f] text-lg">
          Get Notified
        </span>
      </Button>
    </section>
  );
};
