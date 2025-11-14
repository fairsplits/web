import { ReactElement } from "react";

export const TopBar = (): ReactElement => {
  return (
    <nav className="w-full px-4 md:px-8 py-4 pt-8 bg-Schemes-Surface-Variant flex items-center justify-between">
      <div className="flex-shrink-0">
        <img src="/logo-with-icon.png" alt="Fairsplits Logo" className="h-8 md:h-10" />
      </div>

      <div className="hidden md:flex items-center gap-4">
        <a
          href="https://apps.apple.com/in/app/fairsplits/id6747156264"
          className="block transition-transform hover:scale-105"
        >
          <img src="/apple-download-btn-small.png" alt="Download on App Store" className="h-10" />
        </a>

        <a
          href="https://play.google.com/store/apps/details?id=in.fairsplits.app"
          className="flex-shrink-0"
        >
          <img
            src="/playstore-download-btn-small.png"
            alt="Get it on Google Play"
            className="h-10"
          />
        </a>

        <button className="px-6 py-2 bg-[#6B5D37] text-white rounded-full text-sm font-medium hover:bg-[#574B2D] transition-colors">
          Signup
        </button>
      </div>
    </nav>
  );
};
