import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { animate, inView } from "framer-motion";
// ✏️ تعديل: استيراد Toaster
import { Toaster } from "react-hot-toast";

import Footer from "./components/footer/Footer";
import Loading from "./components/loading/Loading";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import BlogList from "./pages/blog/BlogList";
import BlogPost from "./pages/blog/BlogDetail";
import ContactUs from "./pages/contact/ContactUs";
import Home from "./pages/home/Home";
import CTA from "./pages/cta/CTA";
import ProjectsList from "./pages/projects/ProjectsList";
import ProjectDetail from "./pages/projects/ProjectDetail";
import Services from "./pages/services/Services";
import LegalPage from "./pages/legal/LegalPage";
// import ServiceDetail from "./pages/services/ServiceDetail";
import Testimonials from "./pages/testimonials/Testimonials";
import NotFound from "./pages/notFound/NotFound";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import BackToTop from "./components/backToTop/BackToTop";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const observedElements = new Map();
    const animatedElements = new WeakSet();
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observeElement = (element) => {
      if (
        prefersReducedMotion ||
        observedElements.has(element) ||
        animatedElements.has(element) ||
        element.querySelector("[data-motion]")
      ) {
        return;
      }

      element.style.opacity = "0";
      element.style.transform = "translate3d(0, 18px, 0)";

      const duration = Math.min(Number(element.dataset.motionDuration) || 600, 750);
      const motionSiblings = Array.from(element.parentElement?.children ?? []).filter((sibling) =>
        sibling.matches("[data-motion]"),
      );
      const staggerIndex = Math.max(motionSiblings.indexOf(element), 0);
      const delay = Number(element.dataset.motionDelay || 0) + Math.min(staggerIndex, 3) * 75;
      const offset = Number(element.dataset.motionOffset || 10);
      const stopObserving = inView(
        element,
        () => {
          animatedElements.add(element);
          animate(
            element,
            { opacity: 1, y: 0 },
            {
              duration: duration / 1000,
              delay: delay / 1000,
              ease: [0.22, 1, 0.36, 1],
            },
          );
        },
        { margin: `0px 0px -${offset}px 0px` },
      );

      observedElements.set(element, stopObserving);
    };

    const observeTree = (node) => {
      if (!(node instanceof Element)) return;
      if (node.matches("[data-motion]")) observeElement(node);
      node.querySelectorAll("[data-motion]").forEach(observeElement);
    };

    const stopObservingTree = (node) => {
      if (!(node instanceof Element)) return;
      const elements = [node, ...node.querySelectorAll("[data-motion]")];
      elements.forEach((element) => {
        observedElements.get(element)?.();
        observedElements.delete(element);
      });
    };

    observeTree(document.body);

    const mutationObserver = new MutationObserver((mutations) => {
      const addedNodes = new Set();
      const removedNodes = new Set();

      mutations.forEach(({ addedNodes: added, removedNodes: removed }) => {
        added.forEach((node) => addedNodes.add(node));
        removed.forEach((node) => removedNodes.add(node));
      });

      addedNodes.forEach(observeTree);
      removedNodes.forEach((node) => {
        if (node instanceof Element && !node.isConnected) stopObservingTree(node);
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    const timer = setTimeout(() => setLoading(false), 800);

    return () => {
      clearTimeout(timer);
      mutationObserver.disconnect();
      observedElements.forEach((stopObserving) => stopObserving());
      observedElements.clear();
    };
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {/* ✏️ تعديل: مكان عرض التوستات (مرة واحدة بس في المشروع) */}
      <Toaster position="top-center" toastOptions={{ style: { fontFamily: "inherit" } }} />

      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/projects" element={<ProjectsList />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/portfolio" element={<ProjectsList />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/services/:slug" element={<ServiceDetail />} /> */}
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/cta" element={<CTA />} />
        <Route path="/privacy-policy" element={<LegalPage type="privacy" />} />
        <Route path="/terms" element={<LegalPage type="terms" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <BackToTop />
      <Footer />
    </>
  );
}
