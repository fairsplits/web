import { BrowserRouter as Router, Routes, Route } from "react-router";

import { SignupPage } from "./pages/signup";
import { InstallPage } from "./pages/signup/install";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./pages/home";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<SignupPage />} />
          <Route path="/install" element={<InstallPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
