import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import GettingStartedPage from "./pages/getting-started/GettingStarted";
import CommandPage from "./pages/CommandPage";
import AboutPage from "./pages/About";
import TemplateStructurePage from "./pages/getting-started/TemplateStructure";
import TemplatesPage from "./pages/TemplatesPage";
import TemplatePage from "./pages/TemplatePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/docs/getting-started" element={<GettingStartedPage />} />

        <Route
          path="/docs/getting-started/template-structure"
          element={<TemplateStructurePage />}
        />

        <Route
          path="/docs/commands/:category/:command"
          element={<CommandPage />}
        />

        <Route
          path="/templates"
          element={<TemplatesPage />}
        />

        <Route 
          path="/templates/:id"
          element={<TemplatePage />}
        />

        <Route path="/about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}

export default App;
