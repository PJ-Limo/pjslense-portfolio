import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PageMeta from "./components/PageMeta";
import Partners from "./components/Partners";
import Portfolio from "./components/Portfolio";
import ScrollToTop from "./components/ScrollToTop";
import Testimonials from "./components/Testimonials";

const Photography = lazy(() => import("./pages/Photography"));
const Design = lazy(() => import("./pages/Design"));
const Video = lazy(() => import("./pages/Video"));
const Stories = lazy(() => import("./pages/Stories"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));

function HomePage() {
  return (
    <>
      <PageMeta
        description="Joseph Limo is a Nairobi-based communications and multimedia specialist working across photography, graphic design, documentary film and visual storytelling."
        path="/"
      />
      <main id="main-content">
        <Hero />
        <Partners />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}

function RouteLoading() {
  return (
    <main
      id="main-content"
      className="flex min-h-screen items-center justify-center bg-charcoal px-6 text-snow"
    >
      <p role="status" className="text-sm text-muted">
        Loading portfolio…
      </p>
    </main>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-charcoal">
      <a
        href="#main-content"
        className="fixed left-4 top-3 z-[100] -translate-y-20 rounded-sm bg-amber px-4 py-2 text-sm font-semibold text-charcoal transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <Navbar />
      <ScrollToTop />
      <Suspense fallback={<RouteLoading />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio/photography" element={<Photography />} />
          <Route path="/portfolio/design" element={<Design />} />
          <Route path="/portfolio/video" element={<Video />} />
          <Route path="/portfolio/stories" element={<Stories />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
