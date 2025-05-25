import { SparklesIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const NotificationFormSection = (): JSX.Element => {
  // Feature card data to enable mapping
  const featureCards = [
    {
      id: 1,
      title: "White-Label & Fully Customizable",
      description:
        "Your branding, your rules. Aicademy adapts to your company's style, tone, and structure — no coding required.",
    },
    {
      id: 2,
      title: "White-Label & Fully Customizable",
      description:
        "Your branding, your rules. Aicademy adapts to your company's style, tone, and structure — no coding required.",
    },
    {
      id: 3,
      title: "White-Label & Fully Customizable",
      description:
        "Your branding, your rules. Aicademy adapts to your company's style, tone, and structure — no coding required.",
    },
    {
      id: 4,
      title: "White-Label & Fully Customizable",
      description:
        "Your branding, your rules. Aicademy adapts to your company's style, tone, and structure — no coding required.",
    },
    {
      id: 5,
      title: "White-Label & Fully Customizable",
      description:
        "Your branding, your rules. Aicademy adapts to your company's style, tone, and structure — no coding required.",
    },
  ];

  return (
    <section className="flex flex-col w-full items-center gap-20 py-0 px-4 md:px-[100px]">
      <div className="flex w-full max-w-[938px] items-start justify-center">
        <h2 className="font-medium text-[#18191b] text-5xl text-center tracking-[-1.50px] leading-[60px] font-['Poppins',Helvetica]">
          Our Core Features
        </h2>
      </div>

      <div className="flex flex-col items-start gap-[30px] w-full">
        {/* First row - 3 cards */}
        <div className="flex flex-col md:flex-row items-center gap-[30px] w-full">
          {featureCards.slice(0, 3).map((card) => (
            <Card
              key={card.id}
              className="w-full bg-white rounded-2xl overflow-hidden shadow-[0px_10px_30px_-3px_#0000000f]"
            >
              <CardContent className="flex flex-col items-center gap-4 p-5">
                <div className="relative w-8 h-8">
                  <SparklesIcon className="w-8 h-8 text-[#081d3f]" />
                </div>

                <div className="w-full">
                  <h3 className="font-['Poppins',Helvetica] font-bold text-[#081d3f] text-base text-center tracking-[0] leading-5">
                    {card.title}
                  </h3>
                </div>

                <div className="w-full">
                  <p className="font-['Poppins',Helvetica] font-normal text-neutral-700 text-base text-center tracking-[0] leading-6">
                    {card.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Second row - 2 cards */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-[30px] w-full">
          {featureCards.slice(3, 5).map((card) => (
            <Card
              key={card.id}
              className="w-full md:w-[393px] bg-white rounded-2xl overflow-hidden shadow-[0px_10px_30px_-3px_#0000000f]"
            >
              <CardContent className="flex flex-col items-center gap-4 p-5">
                <div className="relative w-8 h-8">
                  <SparklesIcon className="w-8 h-8 text-[#081d3f]" />
                </div>

                <div className="w-full">
                  <h3 className="font-['Poppins',Helvetica] font-bold text-[#081d3f] text-base text-center tracking-[0] leading-5">
                    {card.title}
                  </h3>
                </div>

                <div className="w-full">
                  <p className="font-['Poppins',Helvetica] font-normal text-neutral-700 text-base text-center tracking-[0] leading-6">
                    {card.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
