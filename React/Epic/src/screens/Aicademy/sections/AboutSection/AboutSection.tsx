import { CheckIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

// Define the data for the features list to make it more maintainable
const features = [
  "Employee Onboarding",
  "Upskilling & Reskilling",
  "Leadership Development",
  "Partner & Client Training learning",
];

export const AboutSection = (): JSX.Element => {
  return (
    <section className="w-full flex justify-center bg-white py-16">
      <div className="flex flex-col md:flex-row w-full max-w-7xl">
        {/* Left content column */}
        <div className="w-full md:w-1/2 p-16 flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <div>
              <Badge className="bg-[#0098fd] text-white hover:bg-[#0098fd] font-medium">
                REAL SOLUTIONS FOR REAL TEAMS
              </Badge>
            </div>

            <h2 className="font-medium text-[#18191b] text-5xl tracking-[-1.50px] leading-[60px] font-['Poppins',Helvetica]">
              Perfect for your next
              <br />
              project.
            </h2>
          </div>

          <div className="flex flex-col gap-5 grow">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center py-4 pr-9">
                <div className="flex items-center gap-2.5 grow">
                  <div className="relative w-5 h-5 text-[#0098fd]">
                    <CheckIcon className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-[#71737c] text-3xl leading-9 font-['Poppins',Helvetica]">
                    {feature}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right content column - pattern background */}
        <div className="w-full md:w-1/2 bg-[#46b8ff] relative overflow-hidden">
          <Card className="absolute top-[327px] left-0 w-[807px] h-[920px] rounded-[28.02px_28.02px_0px_0px] shadow-[0px_0px_50px_#00000026] border-none">
            <CardContent className="p-0">
              {/* Card content would go here if needed */}
            </CardContent>
          </Card>

          {/* Pattern background - simplified to avoid excessive DOM elements */}
          <div className="absolute inset-0 opacity-25">
            <div className="w-full h-full bg-[url('/pattern-bg.png')] bg-repeat"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
