import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

const routes = {
  "/": Hero,
  "/about": About,
  "/education": Education,
  "/experience": Experience,
  "/projects": Projects,
  "/skills": Skills,
  "/contact": Contact,
};

function getRouteFromHash() {
  const hash = window.location.hash.replace(/^#/, "");

  if (!hash || hash === "/") {
    return "/";
  }

  return hash.startsWith("/") ? hash : `/${hash}`;
}

function App() {
  const [route, setRoute] = useState(getRouteFromHash());

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getRouteFromHash());
    };

    window.addEventListener("hashchange", handleHashChange);

    if (!window.location.hash) {
      window.location.hash = "#/";
    }

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const ActivePage = routes[route] ?? routes["/"];

  return (
    <div className="app-shell">
      <Navbar activeRoute={route} />

      <main className="main-content">
        <ActivePage />
      </main>

      <Footer />
    </div>
  );
}

export default App;
