import { BrowserRouter as Router, Routes, Route } from "react-router";

import { SignupPage } from "./pages/signup";
import { InstallPage } from "./pages/signup/install";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./pages/home";
import { PrivacyPage } from "./pages/privacy";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/install" element={<InstallPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
