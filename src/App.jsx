import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Photography from "./pages/Photography";
import Design from "./pages/Design";
import Video from "./pages/Video";
import Stories from "./pages/Stories";

function App() {
  return (
    <div className="bg-charcoal min-h-screen">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <Partners />
              <Portfolio />
              <Testimonials />
              <Contact />
            </main>
          }
        />
        <Route path="/portfolio/photography" element={<Photography />} />
        <Route path="/portfolio/design" element={<Design />} />
        <Route path="/portfolio/video" element={<Video />} />
        <Route path="/portfolio/stories" element={<Stories />} />
        <Route
          path="/projects/:slug"
          element={
            <div className="text-snow p-20 font-inter">
              Project page coming soon
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
