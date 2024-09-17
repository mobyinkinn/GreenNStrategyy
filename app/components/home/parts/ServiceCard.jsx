"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import BarChartIcon from "@mui/icons-material/BarChart";
import Slide from "@mui/material/Slide";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
export default function ServiceCard({ name, data }) {
  const [showButton, setShowButton] = useState(false);

  return (
    <Stack
      padding={"10px"}
      className="div-animated"
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
      sx={{
        "&:hover": {
          translate: "0 -20px",
          transition: "all 0.5s ease",
        },
      }}
    >
      <Stack
        width={{
          xs: "80vw",
          md: "35vw",
          lg: "20vw",
        }}
        sx={{
          margin: "0 auto",
          justifyContent: "space-between",
          height: "100%",
          border: "1px solid white",
          borderRadius: "5px",
          padding: "30px",
          cursor: "pointer",
        }}
      >
        <Stack alignItems={"center"}>
          <BarChartIcon
            sx={{ height: "60px", width: "60px", color: "#005900" }}
          />
          <h2 style={{ textAlign: "center", fontFamily: "Lora" }}>{name}</h2>

          <Typography
            marginTop={"5px"}
            sx={{ textAlign: "center" }}
            fontFamily={"Lora"}
            color="#808080"
          >
            {data}
          </Typography>
        </Stack>
      </Stack>
      <Stack
        width={"100%"}
        height={"20px"}
        alignItems={"center"}
        position={"relative"}
      >
        <Slide direction="up" in={showButton} mountOnEnter unmountOnExit>
          <Button
            endIcon={<ArrowRightIcon sx={{ pl: "0px", fontSize: "10px" }} />}
            sx={{ textTransform: "none", color: "#005900" }}
          >
            Learn more
          </Button>
        </Slide>
      </Stack>
    </Stack>
  );
}
