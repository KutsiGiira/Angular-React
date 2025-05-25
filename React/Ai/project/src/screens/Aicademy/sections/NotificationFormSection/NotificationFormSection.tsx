
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const NotificationFormSection = (): JSX.Element => {
  const featureCards = [
    {
      id: 1,
      title: "White-Label & Fully Customizable",
      description:
        "Your branding, your rules. Aicademy adapts to your company’s style, tone, and structure — no coding required.",
    },
    {
      id: 2,
      title: "AI-Powered Learning Journeys",
      description:
        "Deliver adaptive, personalized paths that evolve with learner progress, goals, and skills — for smarter engagement at scale.",
    },
    {
      id: 3,
      title: "Automated Content Generation",
      description:
        "Create structured lessons, dynamic quizzes, and training flows in minutes using AI — faster launches, better experiences.",
    },
    {
      id: 4,
      title: "Interactive AI Coaches & Avatars",
      description:
        "Boost engagement with virtual mentors that support, guide, and simulate real-world conversations or training scenarios.",
    },
    {
      id: 5,
      title: "AI Augmented Analytics & ROI Tracking",
      description:
        "Monitor training impact, identify skill gaps, and prove value with real-time dashboards and actionable learning insights.",
    },
  ];

  return (
    <section className="relative w-full flex justify-center items-center py-16 overflow-visible bg-gradient-to-b from-white via-white to-white">

      {/* Blur Circles */}
      <div className="absolute left-0 md:left-150 top-[170px] md:w-[400px] md:h-[300px] w-[120px] h-[08px] bg-[#46B8FF] rounded-full blur-[150px] opacity-10 md:opacity-30 z-0" />
      <div className="absolute right-0  md:right-150 top-[170px] md:w-[400px] md:h-[300px] w-[120px] h-[900px] bg-[#46B8FF] rounded-full blur-[150px] opacity-10 md:opacity-30 z-0" />
      

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-4 md:px-20">
        <div className="flex w-full items-center justify-center mb-20">
          <h2 className="font-medium text-[#18191b] text-5xl text-center tracking-[-1.50px] leading-[60px] font-['Poppins',Helvetica]">
            Our Core Features
          </h2>
        </div>

        <div className="flex flex-col items-start gap-[30px] w-full">
          {/* First row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] w-full">
            {featureCards.slice(0, 3).map((card) => (
              <Card
                key={card.id}
                className="w-full bg-white rounded-2xl overflow-hidden shadow-[0px_10px_30px_-3px_#0000000f]"
              >
                <CardContent className="flex flex-col items-center gap-4 p-5">
                  <div className="relative w-8 h-8">
                    
                    {/* Decorative yellow icon */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] w-full max-w-[820px] mx-auto">
            {featureCards.slice(3, 5).map((card) => (
              <Card
                key={card.id}
                className="w-full bg-white rounded-2xl overflow-hidden shadow-[0px_10px_30px_-3px_#0000000f]"
              >
                <CardContent className="flex flex-col items-center gap-4 p-5">
                  <div className="relative w-8 h-8">
                         
                          {/* Decorative yellow icon */}
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
      </div>
    </section>
  );
};
