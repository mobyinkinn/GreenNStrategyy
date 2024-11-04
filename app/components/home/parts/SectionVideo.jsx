import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const SectionVideo = () => {
  return (
    <Stack
      direction={{ lg: "row" }}
      margin={{ xs: "0 20px", md: "0 70px" }}
      gap={"40px"}
      alignItems={"center"}
      justifyContent={"space-around"}
    >
      <Stack
        width={{ lg: "40%" }}
        alignItems={"start"}
        justifyContent={"center"}
        gap={2}
      >
        <Stack direction={"row"} gap={"20px"} alignItems={"Center"}>
          <Typography
            color="white"
            fontFamily={"Lora"}
            fontSize={{ xs: "25px", sm: "40px", lg: "45px", xl: "60px" }}
          >
            <span style={{ color: "#005900", fontWeight: "bold" }}>How</span> Do
            We Work?
          </Typography>
        </Stack>
        <Box
          width={{ xs: "100px", md: "400px" }}
          marginTop={"5px"}
          sx={{
            content: "''",
            height: "1px",
            bgcolor: "#655d5d",
          }}
        />
        <Stack marginTop={"5px"}>
          <Typography
            color="white"
            fontSize={{ md: "20px" }}
            fontFamily={"Lora"}
            textAlign={"justify"}
          >
            Our process begins with assessing and understanding our clients'
            needs, defining their business challenges, and establishing mutual
            trust. We then conduct comprehensive market research through
            surveys, as well as primary and secondary research, to gather the
            necessary data. Our expert analysts and strategists meticulously
            analyze this data, transforming it into actionable solutions.
          </Typography>
        </Stack>
      </Stack>
      <Stack width={{ lg: "50%" }}>
        {/* <ReactPlayer
        url="@/public/assets/video.mp4"
        width="100%"
        height="auto"
        controls
      /> */}
        <video
          width="100%"
          height="auto"
          autoPlay
          loop
          muted
          controls={false}
          style={{ borderRadius: "20px" }}
        >
          <source src="/assets/video.mp4" type="video/mp4" />
        </video>
      </Stack>
    </Stack>
  );
};

export default SectionVideo;
