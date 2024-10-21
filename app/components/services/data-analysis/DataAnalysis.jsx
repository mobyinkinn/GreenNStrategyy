// import React from 'react'

// const DataAnalysis = () => {
//   return (
//     <div>DataAnalysis</div>
//   )
// }

// export default DataAnalysis

"use client";

import React from "react";
import Navbar from "../../navbar/Navbar";
import { Box, Stack, Typography } from "@mui/material";
import ContactSection from "../../home/parts/ContactSection";
import Footer from "../../footer/Footer";

const DataAnalysis = () => {
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
            <source src="/assets/services/dataAnalyst.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
        <Stack pt={15} direction={"row"}>
          <Stack width={"40%"} alignItems={"center"} justifyContent={"center"}>
            <Typography color="white" fontSize={"80px"} fontFamily={"Lora"}>
              Data Analysis <br /> & Strategy
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
              We specialize in delivering tailored strategies that drive
              measurable success for your business. Our expert team helps you
              maximize sales by identifying growth opportunities and optimizing
              your marketing efforts. We work closely with you to increase ROI
              by refining your campaigns and ensuring every investment counts.
              Through in-depth customer insights, we help you understand and
              meet your audience’s needs, fostering stronger connections and
              long-term loyalty. Additionally, we focus on building a robust
              digital presence that amplifies your brand's visibility and
              enhances your competitive edge across online platforms.
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <ContactSection />
      <Footer />
    </>
  );
};

export default DataAnalysis;
