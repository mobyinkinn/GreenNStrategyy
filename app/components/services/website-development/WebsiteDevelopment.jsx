// import React from 'react'

// const WebsiteDevelopment = () => {
//   return (
//     <div>WebsiteDevelopment</div>
//   )
// }

// export default WebsiteDevelopment

"use client";

import React from "react";
import Navbar from "../../navbar/Navbar";
import { Box, Stack, Typography } from "@mui/material";
import ContactSection from "../../home/parts/ContactSection";
import Footer from "../../footer/Footer";

const WebsiteDevelopment = () => {
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
              opacity: 0.6, // Adjust opacity here
            }}
          >
            <source src="/assets/services/webDev.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
        <Stack
          pt={15}
          direction={{ md: "row" }}
          margin={{ xs: "0 20px", md: "0 50px" }}
        >
          <Stack
            width={{ md: "40%" }}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography
              color="white"
              fontSize={{ lg: "80px", md: "60px", xs: "30px" }}
              textAlign={{ md: "left", xs: "center" }}
              lineHeight={1.2}
            >
              Website <br /> Development
            </Typography>
          </Stack>
          <Stack width={{ md: "60%" }} padding={{ smm: "0 60px" }}>
            <Typography
              color="white"
              textAlign={"justify"}
              fontSize={{ lg: "20px", md: "18px", xs: "15px" }}
              lineHeight={1.8}
            >
              Being like everyone else is boring. We specialize in website
              development that ensures your brand stands out from the endless
              crowd of generic sites. Our team designs custom websites tailored
              to your unique needs, blending innovative design with
              functionality. We focus on creating visually stunning,
              user-friendly platforms that not only engage visitors but also
              reflect your brand’s identity. With our expertise, your website
              will not only look exceptional but also deliver a seamless
              experience that sets you apart in a competitive online world.
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <ContactSection />
      <Footer />
    </>
  );
};

export default WebsiteDevelopment;
