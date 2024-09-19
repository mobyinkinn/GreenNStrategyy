"use client"

import React from 'react'
import Navbar from '../../navbar/Navbar'
import { Box, Stack, Typography } from '@mui/material'
import ContactSection from '../../home/parts/ContactSection';
import Footer from '../../footer/Footer';

const MarketResearch = () => {
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
            <source src="/assets/marres.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
        <Stack pt={15} direction={"row"}>
          <Stack width={"40%"} alignItems={"center"} justifyContent={"center"}>
            <Typography color="white" fontSize={"80px"} fontFamily={"Lora"} lineHeight={1.2}>
              Market <br /> Research
            </Typography>
          </Stack>
          <Stack width={"60%"} padding={"0 60px"}>
            <Typography
              color="white"
              fontSize={"23px"}
              textAlign={"justify"}
              fontFamily={"Lora"}
              lineHeight={1.6}
            >
              Stay ahead of your competitors with our cutting-edge market
              research expertise. We empower your decision- making by providing
              deep, data-driven insights, ensuring you leverage the latest
              trends in your business sector. Our team conducts comprehensive
              surveys to gather crucial data from your target audience,
              transforming it into actionable solutions that directly address
              your business needs. By identifying market opportunities and
              challenges, we help you make informed decisions that drive growth
              and keep you ahead in a competitive landscape.
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <ContactSection />
      <Footer />
    </>
  );
}

export default MarketResearch