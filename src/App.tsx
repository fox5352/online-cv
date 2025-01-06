// :packages
import { BrowserRouter, Route, Routes } from "react-router";

// :css
import "./App.css";

// :components
import RootLayout from "./pages/RootLayout";

// :pages
import Home from "./pages/Home/Page";
import Apps from "./pages/Apps/Page";
import NotFound from "./pages/NotFound/Page";
import Websites from "./pages/Websites/Page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/websites" element={<Websites />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
