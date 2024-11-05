"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import BarChartIcon from "@mui/icons-material/BarChart";
import Slide from "@mui/material/Slide";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useRouter } from "next/navigation";
export default function ServiceCard({ name, data, path }) {
  const [showButton, setShowButton] = useState(false);
  const router = useRouter();
  const handleNavigate = () => {
    router.push(path); // Navigate to the desired route
  };
  return (
    <Stack
      padding={{ smm: "10px" }}
      className="div-animated"
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
      onClick={handleNavigate}
      sx={{
        "&:hover": {
          translate: "0 -20px",
          transition: "all 0.5s ease",
        },
      }}
    >
      <Stack
        width={{
          xs: "100%",
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
          <h2 style={{ textAlign: "center" }}>{name}</h2>

          <Typography
            marginTop={"5px"}
            sx={{ textAlign: "center" }}
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
