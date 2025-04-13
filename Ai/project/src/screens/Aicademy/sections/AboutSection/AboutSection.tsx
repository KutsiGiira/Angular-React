import { CheckIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import frameImage from "../assets/frame.png";

export const AboutSection = (): JSX.Element => {
  const features = [
    "Employee Onboarding",
    "Upskilling & Reskilling",
    "Leadership Development",
    "Partner & Client Training learning",
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Changed from flex-col-reverse to flex-col to put left content first on mobile */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          
          {/* Left Content */}
          <div className="w-full md:w-1/2 flex flex-col gap-10 md:pl-1 md:pt-20" >
            <div className="flex flex-col gap-6">
              <Badge className="bg-[#0098fd] text-white hover:bg-[#0098fd]/90 font-medium w-fit">
                REAL SOLUTIONS FOR REAL TEAMS
              </Badge>

              <h2 className="text-[#18191b] text-4xl sm:text-5xl font-medium tracking-tight leading-tight">
                Perfect for your next <br /> project.
              </h2>
            </div>

            {/* Features List */}
            <div className="flex flex-col gap-5">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 sm:gap-4 py-2"
                >
                  {/* Decorative Yellow Burst Icon */}
                  <div className="relative w-8 h-8 flex items-center justify-center text-[#0098fd]">
                    <div className="relative w-8 h-8">
                      <div
                        className="absolute w-3 h-3 top-0 left-[13px] bg-yellow-300"
                        style={{
                          WebkitMaskImage: "url('/-lt-radial-repeat-gt--415.png')",
                          WebkitMaskSize: "100% 100%",
                          WebkitMaskRepeat: "no-repeat",
                          maskImage: "url('/-lt-radial-repeat-gt--415.png')",
                          maskSize: "100% 100%",
                          maskRepeat: "no-repeat",
                        }}
                      />
                      <div
                        className="absolute w-2.5 h-[15px] top-[7px] left-[22px] bg-yellow-300"
                        style={{
                          WebkitMaskImage: "url('/-lt-radial-repeat-gt--416.png')",
                          WebkitMaskSize: "100% 100%",
                          WebkitMaskRepeat: "no-repeat",
                          maskImage: "url('/-lt-radial-repeat-gt--416.png')",
                          maskSize: "100% 100%",
                          maskRepeat: "no-repeat",
                        }}
                      />
                      <div
                        className="absolute w-[17px] h-2 top-[22px] left-[13px] bg-yellow-300"
                        style={{
                          WebkitMaskImage: "url('/-lt-radial-repeat-gt--417.png')",
                          WebkitMaskSize: "100% 100%",
                          WebkitMaskRepeat: "no-repeat",
                          maskImage: "url('/-lt-radial-repeat-gt--417.png')",
                          maskSize: "100% 100%",
                          maskRepeat: "no-repeat",
                        }}
                      />
                      <div
                        className="absolute w-2 h-[17px] top-[15px] left-1.5 bg-yellow-300"
                        style={{
                          WebkitMaskImage: "url('/-lt-radial-repeat-gt--418.png')",
                          WebkitMaskSize: "100% 100%",
                          WebkitMaskRepeat: "no-repeat",
                          maskImage: "url('/-lt-radial-repeat-gt--418.png')",
                          maskSize: "100% 100%",
                          maskRepeat: "no-repeat",
                        }}
                      />
                      <div
                        className="absolute w-[15px] h-2.5 top-[7px] left-0 bg-yellow-300"
                        style={{
                          WebkitMaskImage: "url('/-lt-radial-repeat-gt--419.png')",
                          WebkitMaskSize: "100% 100%",
                          WebkitMaskRepeat: "no-repeat",
                          maskImage: "url('/-lt-radial-repeat-gt--419.png')",
                          maskSize: "100% 100%",
                          maskRepeat: "no-repeat",
                        }}
                      />
                    </div>
                  </div>

                  <span className="text-[#71737c] text-xl sm:text-2xl font-medium leading-snug">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-end md:pr-0 -mr-4 md:-mr-8 lg:-mr-12 xl:-mr-16">
            <img
              src={frameImage}
              alt="Frame"
              className="w-full max-w-[600px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};