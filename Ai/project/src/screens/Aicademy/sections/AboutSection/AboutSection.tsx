import { CheckIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import frameImage from "../assets/frame.png";

export const AboutSection = (): JSX.Element => {
  const features = [
    "Role-Based Onboarding\nat Scale",
    "Continuous Upskilling\n& Reskilling",
    "Executive &\nLeadership Programs",
    "Client & Partner\nEnablement",
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          
          {/* Left Content */}
          <div className="w-full md:w-1/2 flex flex-col gap-10 md:pl-1 md:pt-20">
            <div className="flex flex-col gap-6">
              <Badge className="text-[#0098fd]">
                REAL SOLUTIONS FOR REAL TEAMS
              </Badge>

              <h2 className="text-[#18191b] text-4xl sm:text-5xl font-medium tracking-tight leading-tight">
              Enterprise-ready<br></br>
              Platform
              </h2>
            </div>

            {/* Features List */}
            <div className="flex flex-col gap-5">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 sm:gap-4 py-2"
                >
                  {/* Smaller Decorative Yellow Burst Icon */}
                  <div className="relative w-6 h-6 flex items-center justify-center text-[#0098fd]">
                    <div className="relative w-6 h-6">
                      <div
                        className="absolute w-2.5 h-2.5 top-0 left-[10px] bg-yellow-300"
                        style={{
                          WebkitMaskImage: "url('/-lt-radial-repeat-gt--415.png')",
                          WebkitMaskSize: "80% 80%",
                          WebkitMaskRepeat: "no-repeat",
                          maskImage: "url('/-lt-radial-repeat-gt--415.png')",
                          maskSize: "80% 80%",
                          maskRepeat: "no-repeat",
                        }}
                      />
                      <div
                        className="absolute w-2 h-[12px] top-[6px] left-[18px] bg-yellow-300"
                        style={{
                          WebkitMaskImage: "url('/-lt-radial-repeat-gt--416.png')",
                          WebkitMaskSize: "80% 80%",
                          WebkitMaskRepeat: "no-repeat",
                          maskImage: "url('/-lt-radial-repeat-gt--416.png')",
                          maskSize: "80% 80%",
                          maskRepeat: "no-repeat",
                        }}
                      />
                      <div
                        className="absolute w-[14px] h-1.5 top-[18px] left-[10px] bg-yellow-300"
                        style={{
                          WebkitMaskImage: "url('/-lt-radial-repeat-gt--417.png')",
                          WebkitMaskSize: "80% 80%",
                          WebkitMaskRepeat: "no-repeat",
                          maskImage: "url('/-lt-radial-repeat-gt--417.png')",
                          maskSize: "80% 80%",
                          maskRepeat: "no-repeat",
                        }}
                      />
                      <div
                        className="absolute w-1.5 h-[14px] top-[12px] left-1 bg-yellow-300"
                        style={{
                          WebkitMaskImage: "url('/-lt-radial-repeat-gt--418.png')",
                          WebkitMaskSize: "80% 80%",
                          WebkitMaskRepeat: "no-repeat",
                          maskImage: "url('/-lt-radial-repeat-gt--418.png')",
                          maskSize: "80% 80%",
                          maskRepeat: "no-repeat",
                        }}
                      />
                      <div
                        className="absolute w-[12px] h-2 top-[6px] left-0 bg-yellow-300"
                        style={{
                          WebkitMaskImage: "url('/-lt-radial-repeat-gt--419.png')",
                          WebkitMaskSize: "80% 80%",
                          WebkitMaskRepeat: "no-repeat",
                          maskImage: "url('/-lt-radial-repeat-gt--419.png')",
                          maskSize: "80% 80%",
                          maskRepeat: "no-repeat",
                        }}
                      />
                    </div>
                  </div>

                  <span className="font-['Poppins',Helvetica] text-[#71737c] text-xl sm:text-2xl font-medium leading-snug whitespace-pre-line">
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