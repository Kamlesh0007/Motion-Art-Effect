import { useEffect, useRef } from "react";
import webGLFluidEnhanced from "webgl-fluid-enhanced";
import Header from "./Components/Header";
import SectionWrapper from "./Components/SectionWrapper";
import Testimonials from "./Components/Testimonials";
import BrowserCompatibilitySection from "./Components/BrowserCompatibilitySection";
import ApplySection from "./Components/ApplySection";
import Feature from "./Components/Feature";
import Footer from "./Components/Footer";
import MagicWandSection from "./Components/MagicWandSection";
import HeroSection from "./Components/HeroSection";

const App = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    webGLFluidEnhanced.simulation(canvasRef.current, {
      SIM_RESOLUTION: 128,
      DENSITY_DISSIPATION: 0.8,
      PRESSURE_ITERATIONS: 30,
      VELOCITY_DISSIPATION: 0.2,
      PRESSURE: 0.8,
      SPLAT_RADIUS: 0.25,
      BLOOM: true,
      BLOOM_INTENSITY: 0.8,
      BLOOM_THRESHOLD: 0.6,
      SUNRAYS: true,
      SUNRAYS_WEIGHT: 1.0,
      SHADING: true,
      INITIAL: true,
    });
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className=" h-[100lvh] z-0"
        style={{ position: "fixed", top: 0, left: 0, width: "100%" }}
      />
      <div
        className=" pointer-events-none"
        style={{ width: "100vw", height: "100svh" }}
      >
        <SectionWrapper>
          <Header />
          <HeroSection />
          <Testimonials />
          <MagicWandSection />
          <ApplySection />
          <BrowserCompatibilitySection />
          <Feature />
        </SectionWrapper>
        <Footer />
      </div>
    </>
  );
};

export default App;
