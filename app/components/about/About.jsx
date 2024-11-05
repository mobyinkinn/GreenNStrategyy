"use client";

import { Box, Stack, Typography } from "@mui/material";
import Navbar from "../navbar/Navbar";
import Image from "next/image";
import img from "@/public/assets/Team1.png";
import Footer from "../footer/Footer";

import ceo from "@/public/assets/team/ceo.jpg";
import businessStrategist from "@/public/assets/team/businessStrategist.jpg";
import dataAnalyst from "@/public/assets/team/dataAnalyst.jpg";

export default function About() {
  const data = [
    {
      path: ceo,
      Name: "Yazan Akkad",
      Designation: "CEO",
    },
    {
      path: businessStrategist,
      Name: "Omar Al Mari",
      Designation: "Business Strategist",
    },
    {
      path: dataAnalyst,
      Name: "Maryam Haghshenaz",
      Designation: "Data Analyst",
    },
  ];

  return (
    <Box>
      <Navbar showNav={true} />
      {/* <Stack position={"relative"} height={"40vh"} width={"90vw"}>
        <Image src={img} fill objectFit="cover" alt="" />
      </Stack>
      <Stack
        backgroundColor={"black"}
        fontSize={"1.2rem"}
        gap={"20px"}
        color={"white"}
        padding={"10vh 5vw"}
        className="about-container"
      >
        <h1 style={{ color: "#005900" }}>About Us</h1>
        <Stack>
          Green & Strategy is a Data Analysis and Strategy consulting firm,
          specialized in providing you with the best strategies to generate
          leads, maximize ROI, dominate your market competitors, understand your
          customer needs, and establish a solid digital presence. We are able to
          do this through advanced market research tools, excellent researchers,
          expert data analysts, and top-tier consultants. Green & Strategy is
          the only strategy firm in the UAE that is able to combine market
          research and data analysis
        </Stack>
        <Stack gap={"5px"}>
          <h2 style={{ color: "#005900" }}>How do we work?</h2>
          <Box>
            Our process begins with assessing and understanding our clients'
            needs, defining their business challenges, and establishing mutual
            trust. We then conduct comprehensive market research through
            surveys, as well as primary and secondary research, to gather the
            necessary data. Our expert analysts and strategists meticulously
            analyze this data, transforming it into actionable solutions.
          </Box>
        </Stack>
        <Stack gap={"5px"}>
          <h2 style={{ color: "#005900" }}>
            Your best provider for Data Analysis and Strategies in UAE
          </h2>
          <Box>
            We deliver the bullet proof strategy for your business success,
            driven by invaluable data and in-depth research tailored
            specifically to your brand.
          </Box>
        </Stack>
        <Stack gap={"5px"}>
          <h2 style={{ color: "#005900" }}>Market Research</h2>
          <ul className="market-research">
            <li>Campaign Creation</li>
            <li>Lead Generation</li>
            <li>Market Treands</li>
            <li>AI Integration</li>
            <li>Competitor Analysis</li>
            <li>Customer Experience</li>
            <li>Customer Satisfaction</li>
            <li>Product Testing</li>
            <li>ROI Optimization</li>
          </ul>
        </Stack>
        <Stack gap={"5px"}>
          <h2 style={{ color: "#005900" }}>Our Vision</h2>
          <Box>
            Our vision is to become the UAE's most trusted advisor, delivering
            top-tier Data Analysis and Strategic Insights through cutting-edge
            market research tools.
          </Box>
        </Stack>
      </Stack> */}
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        height={{ xl: "100vh", md: "100vh", xs: "100vh" }}
      >
        <Typography
          fontSize={{ xl: "4rem", lg: "4rem", md: "3rem", xs: "2.5rem" }}
          color="white"
          fontFamily={"Lora"}
        >
          About Us
        </Typography>
        <Typography
          fontSize={{ xl: "1rem", lg: "1rem", md: "1rem", xs: "0.8rem" }}
          width={{ md: "70%", xs: "90%" }}
          textAlign={"center"}
          color="white"
          fontFamily={"Lora"}
        >
          Green & Strategy is a Data Analysis and Strategy consulting firm,
          specialized in providing you with the best strategies to skyrocket
          your sales, generate leads, maximize ROI, dominate your market
          competitors, understand your customer needs, and establish a solid
          digital presence.
          <br />
          <br />
          Green & Strategy is en route to become the number 1 trusted local
          strategy consultancy in the UAE.
        </Typography>
      </Stack>
      <Stack padding={{ xl: "0 6%", md: "0 6%", xs: "0 4%" }}>
        <Typography
          fontSize={{ xl: "4rem", lg: "4rem", md: "3rem", xs: "2.5rem" }}
          color="white"
          fontFamily={"Lora"}
        >
          Our Team
        </Typography>
        <Stack
          bgcolor={"#333"}
          padding={{ xl: 3, sm: "0 18px" }}
          direction={{ smm: "row" }}
          flexWrap={"wrap"}
          gap={{ xl: 5, md: "40px", smm: "17px", xs: "40px" }}
          justifyContent={"center"}
          alignItems={"center"}
          m={"20px 0 40px 0"}
        >
          {data.map((d) => (
            <Stack
              position={"relative"}
              height={{
                xl: "50vh",
                lg: "46vh",
                md: "35vh",
                smm: "15vh",
                xs: "40vh",
              }}
              width={{ smm: "30%", xs: "100%" }}
            >
              <Image
                src={d.path}
                objectFit="cover"
                objectPosition="top center"
                style={{
                  filter: "grayscale(100%)",
                }}
                fill
                alt=""
              />
              <Stack
                position={"absolute"}
                bgcolor={"white"}
                right={-10}
                padding={{ xl: "10px", sm: "5px" }}
                bottom={-10}
              >
                <Typography
                  fontSize={{ xl: "30px", lg: "27px", md: "24px", sm: "9px" }}
                  fontFamily={"Lora"}
                >
                  {d.Name}
                </Typography>
                <Typography
                  fontFamily={"Lora"}
                  fontSize={{ xl: "27px", lg: "20px", md: "17px", sm: "7px" }}
                >
                  {d.Designation}
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Footer />
    </Box>
  );
}
