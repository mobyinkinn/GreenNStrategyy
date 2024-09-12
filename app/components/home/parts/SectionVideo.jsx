import { Box, Stack, Typography } from '@mui/material';
import React from 'react'
const SectionVideo = () => {
  return (
    <Stack direction={"row"} pb={5} justifyContent={"space-around"}>
      <Stack
        width={"40%"}
        alignItems={"start"}
        justifyContent={"center"}
        gap={2}
      >
        <Stack direction={"row"} gap={"20px"} alignItems={"Center"}>
          <Typography color="white" fontFamily={"Lora"} fontSize={"70px"}>
            <span style={{ color: "#005900", fontWeight: "bold" }}>How</span> Do
            We Work?
          </Typography>
        </Stack>
        <Box
          marginTop={"5px"}
          sx={{
            content: "''",
            width: "400px",
            height: "1px",
            bgcolor: "#655d5d",
          }}
        />
        <Stack marginTop={"5px"}>
          <Typography color="white" fontSize={"20px"} fontFamily={"Lora"}>
            Our process begins with assessing and understanding our clients'
            needs, defining their business challenges, and establishing mutual
            trust. We then conduct comprehensive market research through
            surveys, a s well as primary and secondary research, to gather the
            necessary data. Our expert analysts and strategists meticulously
            analyze this data, transforming it into actionable solutions.
          </Typography>
        </Stack>
      </Stack>
      <Stack width={"50%"}>
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
}

export default SectionVideo