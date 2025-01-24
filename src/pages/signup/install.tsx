import { Container, Paper } from "@mui/material";

export function InstallPage() {
  return (
    <div className="bg-Schemes-Background w-full h-screen flex flex-col items-center justify-center">
      <img src="/fs-logo-large.png" className="mb-8 w-80" />

      <Container maxWidth="sm">
        <Paper
          elevation={2}
          sx={{
            p: { xs: 2, sm: 4 },
            borderRadius: 2,
          }}
        >
          <h1 className="text-center text-2xl mb-1">Download Our App</h1>
          <p className="text-gray-600 text-center">Get our app now on iOS and Android</p>

          <div className="space-y-4 flex flex-col items-center mt-4">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-transform hover:scale-105"
            >
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                className="w-56 h-auto object-contain"
              />
            </a>

            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-transform hover:scale-105"
            >
              <img
                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
                alt="Download on the App Store"
                className="w-52 h-auto object-contain"
              />
            </a>
          </div>
        </Paper>
      </Container>
    </div>
  );
}
