import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="w-full py-16">
      <div className="w-full max-w-[1920px] mx-auto px-4">
        <Card className="border-none shadow-none w-full">
          <CardContent className="flex flex-col items-center gap-6 p-4">
            {/* Decorative icon */}
            <div className="relative w-8 h-8">
              <div className="absolute w-3 h-3 top-0 left-[13px] bg-[url(/-lt-radial-repeat-gt--415.png)] bg-[100%_100%]" />
              <div className="absolute w-2.5 h-[15px] top-[7px] left-[22px] bg-[url(/-lt-radial-repeat-gt--416.png)] bg-[100%_100%]" />
              <div className="absolute w-[17px] h-2 top-[22px] left-[13px] bg-[url(/-lt-radial-repeat-gt--417.png)] bg-[100%_100%]" />
              <div className="absolute w-2 h-[17px] top-[15px] left-1.5 bg-[url(/-lt-radial-repeat-gt--418.png)] bg-[100%_100%]" />
              <div className="absolute w-[15px] h-2.5 top-[7px] left-0 bg-[url(/-lt-radial-repeat-gt--419.png)] bg-[100%_100%]" />
            </div>

            {/* Tagline */}
            <p className="text-[#081d3f] text-[22px] text-center leading-7 font-normal font-['Poppins',Helvetica] w-full">
              Let&apos;s make your training smarter, faster, and more human.
            </p>

            {/* Heading */}
            <h2 className="font-['Poppins',Helvetica] font-medium text-[#18191b] text-4xl text-center leading-10 w-full max-w-[480px]">
              Ready to Build Your AI-Powered Academy?
            </h2>

            {/* CTA Button */}
            <Button className="w-[352px] h-[50px] bg-[#8958fe] rounded-[10px] font-['Poppins',Helvetica] font-semibold text-white text-sm">
              Get Notified
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};