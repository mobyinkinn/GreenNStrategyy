// import React from 'react'

// const DigitalMarketing = () => {
//   return (
//     <div>DigitalMarketing</div>
//   )
// }

// export default DigitalMarketing

"use client";

import React from "react";
import Navbar from "../../navbar/Navbar";
import { Box, Stack, Typography } from "@mui/material";
import ContactSection from "../../home/parts/ContactSection";
import Footer from "../../footer/Footer";

const DigitalMarketing = () => {
  return (
    <>
      <Navbar showNav={true} />
      <Box
        position="relative"
        zIndex={1}
        width="100%"
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        color="white"
      >
        {/* Background video */}
        <Box
          pt={10}
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          zIndex={-1}
          overflow="hidden"
        >
          <video
            autoPlay
            muted
            loop
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.2, // Adjust opacity here
            }}
          >
            <source src="/assets/digitalmar.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
        <Stack pt={15} direction={"row"}>
          <Stack width={"40%"} alignItems={"center"} justifyContent={"center"}>
            <Typography color="white" fontSize={"80px"} fontFamily={"Lora"} lineHeight={1.2}>
              Digital <br /> Marketing
            </Typography>
          </Stack>
          <Stack width={"60%"} padding={"0 60px"}>
            <Typography
              color="white"
              fontSize={"23px"}
              textAlign={"justify"}
              fontFamily={"Lora"}
              lineHeight={1.8}
            >
              Increase your brand awareness and grow your market presence with
              our expert marketing solutions. We develop and implement tailored
              strategies that allow your brand to stand out in the competitive
              UAE market, ensuring you capture the attention of your target
              audience. Our team collaborates with talented creative directors
              to produce professional, high-quality content that reflects your
              brand's identity and engages customers. By combining strategic
              marketing with creative excellence, we help you build a
              recognizable and impactful brand that drives success and long-term
              growth.
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <ContactSection />
      <Footer />
    </>
  );
};

export default DigitalMarketing;