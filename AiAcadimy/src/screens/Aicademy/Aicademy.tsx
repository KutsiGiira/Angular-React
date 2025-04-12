import React from "react";
import { AboutSection } from "./sections/AboutSection/AboutSection";
import { FeatureSection } from "./sections/FeatureSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroSection } from "./sections/HeroSection";
import { MainContentSection } from "./sections/MainContentSection";
import { NotificationFormSection } from "./sections/NotificationFormSection/NotificationFormSection";

export const Aicademy = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col items-center w-full">
      <div className="bg-white w-full max-w-[1440px] relative">
        {/* Header section at the top */}
        <HeaderSection />

        {/* Hero section with device images */}
        <HeroSection />

        {/* Feature section with background effects */}
        <FeatureSection />

        {/* Notification form section with background effects */}
        <NotificationFormSection />

        {/* About section */}
        <AboutSection />

        {/* Main content section */}
        <MainContentSection />

        {/* Footer section */}
        <FooterSection />
      </div>
    </div>
  );
};
