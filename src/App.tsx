import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import GettingStartedPage from "./pages/GettingStarted";
import CommandPage from "./pages/CommandPage";
import AboutPage from "./pages/About";
import TemplatesPage from "./pages/TemplatesPage";
import TemplatePage from "./pages/TemplatePage";
import HomePage from "./pages/HomePage";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/docs/getting-started/:section"
            element={<GettingStartedPage />}
          />

          <Route
            path="/docs/commands/:category/:command"
            element={<CommandPage />}
          />

          <Route path="/templates" element={<TemplatesPage />} />

          <Route path="/templates/:id" element={<TemplatePage />} />

          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
