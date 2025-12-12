import React from "react";
import { Link } from "react-router";
import { TopBar } from "../../modules/home/top-bar";

const HomePage: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <TopBar />

      <div className="bg-Schemes-Surface-Variant w-full h-screen flex flex-col lg:flex-row items-center px-6 lg:px-16 pt-12 relative overflow-hidden">
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
            {/* <a href="#" className="transition-transform hover:scale-105">
              <img
                src="/apple-download-btn-small.png"
                alt="Download on App Store"
                className="h-12"
              />
            </a> */}
            <a
              href="https://play.google.com/store/apps/details?id=in.fairsplits.app"
              className="transition-transform hover:scale-105"
            >
              <img
                src="/playstore-download-btn-small.png"
                alt="Get it on Google Play"
                className="h-12"
              />
            </a>

            <a
              href="https://apps.apple.com/in/app/fairsplits/id6747156264"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-transform hover:scale-105"
            >
              <img
                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
                alt="Download on the App Store"
                className="h-12 object-contain"
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

      {/* Footer - appears after scrolling */}
      <footer
        className={`w-full py-4 px-6 lg:px-16 bg-Schemes-Surface-Variant border-t border-Schemes-Outline transition-opacity duration-300`}
      >
        <div className="flex justify-center items-center">
          <Link
            to="/privacy"
            className="text-Schemes-On-Surface-Variant hover:text-Schemes-Primary transition-colors text-sm font-Grotesk"
          >
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
