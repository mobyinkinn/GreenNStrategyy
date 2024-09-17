"use client";

import { Box } from "@mui/material";
import Navbar from "../navbar/Navbar";
import { useRef, useState } from "react";
import Landing from "../navbar/Landing";
import Banner from "./parts/Banner";
import Services from "../services/Services";
import ProgressBar from "./parts/ProgressBar";
import Footer from "../footer/Footer";
import Form from "./parts/Form";
import Image from "next/image";
import banner1 from "@/public/assets/1.jpg";
import SectionVideo from "./parts/SectionVideo";
import Carausal from "./parts/Carausel";
import ContactSection from "./parts/ContactSection";

export default function Home() {
  const [showNav, setShowNav] = useState(false);
  // Refs for sections
  const bannerRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll to section function
  const scrollToSection = (section) => {
    if (section === "Banner")
      bannerRef.current.scrollIntoView({ behavior: "smooth" });
    else if (section === "Services")
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    else if (section === "Contact")
      contactRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Box sx={{ overflowX: "hidden" }}>
      <Navbar showNav={showNav} scrollToSection={scrollToSection} />
      <Landing setShowNav={setShowNav} />
      <Banner />
      <SectionVideo />
      {/* <ProgressBar /> */}
      <div ref={servicesRef}>
        <Services />
      </div>

      <Carausal />
      <div ref={contactRef}>
        <ContactSection />
      </div>
      {/* <Form /> */}
      {/* <AboveFooter /> */}
      <Footer />
    </Box>
  );
}
