import React from "react";
import { AboutSection } from "./sections/AboutSection/AboutSection";
import { FeatureSection } from "./sections/FeatureSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroSection } from "./sections/HeroSection";
import { MainContentSection } from "./sections/MainContentSection";
import { NotificationFormSection } from "./sections/NotificationFormSection/NotificationFormSection";
import { ImageHeader } from "./sections/imageheader/imageheader";
import { NotifiedForm } from './sections/Notifiedform/notifiedform';

export const Aicademy = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col items-center w-full min-h-screen">
      <div className="bg-white w-full relative">
        {/* Header section at the top */}
        <HeaderSection />

        {/* Hero section with device images */}
        <HeroSection />


        <ImageHeader />
        

        {/* Feature section with background effects */}
        <FeatureSection />

        {/* Notification form section with background effects */}
        <NotificationFormSection />

        <NotifiedForm /> 

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