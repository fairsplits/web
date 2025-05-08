import React from "react";
import { TopBar } from "../../modules/home/top-bar";

const HomePage: React.FC = () => {
  return (
    <div className="w-full h-full min-h-screen flex flex-col">
      <TopBar />

      <div className="bg-Schemes-Surface-Variant w-full h-full flex-1 flex flex-col lg:flex-row items-center px-6 lg:px-16 pt-12 relative overflow-hidden">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-10 mb-8 lg:mb-0">
          <h1 className="text-3xl lg:text-5xl font-bold mb-6 text-Schemes-Primary font-Mono">
            Split Bills,
            <br />
            Free, Fair and Simple!
          </h1>

          <p className="text-lg lg:text-xl text-Schemes-On-Surface mb-8 max-w-xl font-Grotesk leading-6">
            Fairsplits makes splitting expenses easy—whether it's with friends, family, roommates,
            or travel buddies. Add bills, track who owes what, and settle up without the mess
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <a href="#" className="transition-transform hover:scale-105">
              <img
                src="/apple-download-btn-small.png"
                alt="Download on App Store"
                className="h-12"
              />
            </a>
            <a href="#" className="transition-transform hover:scale-105">
              <img
                src="/playstore-download-btn-small.png"
                alt="Get it on Google Play"
                className="h-12"
              />
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="h-full w-full relative">
          <img
            src="/hand-phone-image.png"
            alt="Fairsplits App Demo"
            className="object-contain absolute bottom-0 right-1/4"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
