// :packages
import { BrowserRouter, Route, Routes } from "react-router";

// :css
import "./App.css";

// :components
import RootLayout from "./pages/RootLayout";

// :pages
import Home from "./pages/Home/Page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<div>404</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
