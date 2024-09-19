"use client";

import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { keyframes } from "@emotion/react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { useState } from "react";
import logo from "@/public/assets/logo.png";
import logobig from "@/public/assets/logoSmall.png";
import { useRouter } from "next/navigation";
const navData = [
  { name: "The Team", id: "Banner", route: "/" },
  { name: "Our Services", id: "Services", route: "/" },
  { name: "Contact us", id: "Contact", route: "/" },
];

const translateOnLoad = keyframes`
  from {
    transform: translate(0, -80px);
  }
  to {
    transform: translate(0, 0);
  }
`;

export default function Navbar({ scrollToSection, showNav }) {
  const router = useRouter()
  const [isNavOpen, setIsNavOpen] = useState(false);

  if (showNav) {
    return (
      <Stack>
        {/* For desktop view */}
        <Stack
          bgcolor={"#1b1919"}
          display={{
            xs: "none",
            lg: "flex",
          }}
          direction={"row"}
          width={"100%"}
          className=""
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            color: "white",
            fontSize: "1.2rem",
            position: "fixed",
            top: "0",
            zIndex: "30",
            paddingX: "40px",
            height: "80px",
            animation: `${translateOnLoad} 0.5s ease-out forwards`,
          }}
        >
          {/* <Link href={"/"} style={{ textDecoration: "none", color: "white" }}>
            GNS
          </Link> */}
          <Image
            src={logobig}
            width={300}
            style={{ cursor: "pointer" }}
            onClick={()=>router.push("/")}
          />
          <Stack direction={"row"}>
            {navData.map((el, i) => (
              <Typography
                key={i}
                onClick={() => scrollToSection(el.id)}
                fontFamily={"Lora"}
                margin={"0 20px"}
                color="white"
                fontSize={"1.4rem"}
                sx={{ cursor: "pointer", "&:hover": { color: "limegreen" } }}
              >
                {el.name}
              </Typography>
            ))}
          </Stack>
        </Stack>

        {/* for mobile devices */}
        <Stack
          bgcolor={"#1b1919"}
          direction={"column"}
          display={{
            lg: "none",
          }}
        >
          <Stack
            direction={"row"}
            width={"100%"}
            className=""
            sx={{
              // display: "none",
              justifyContent: "space-between",
              alignItems: "center",
              color: "white",
              // backgroundColor: "black",
              fontSize: "1.2rem",
              position: "fixed",
              top: "0",
              zIndex: "30",
              paddingX: "40px",
              height: "70px",
              animation: `${translateOnLoad} 0.5s ease-out forwards`,
            }}
          >
            <Link href={"/"} style={{ textDecoration: "none", color: "white" }}>
              <Image src={logo} width={70} style={{ cursor: "pointer" }} />
            </Link>
            {!isNavOpen ? (
              <MenuIcon
                sx={{
                  width: {
                    xs: "40px",
                    smm: "50px",
                  },
                  height: {
                    xs: "40px",
                    smm: "50px",
                  },
                  color: "limegreen",
                }}
                onClick={() => setIsNavOpen(true)}
              />
            ) : (
              <CloseIcon
                sx={{
                  width: "60px",
                  height: "60px",
                  color: "limegreen",
                }}
                onClick={() => setIsNavOpen(false)}
              />
            )}
          </Stack>
          {isNavOpen && (
            <Stack
              position={"relative"}
              sx={{
                width: "100%",
              }}
            >
              <Stack
                direction={"column"}
                position={"fixed"}
                sx={{
                  backgroundColor: "black",
                  width: "100%",
                  top: "70px",
                  paddingX: "20px",
                  paddingBottom: "50px",
                  zIndex: "30",
                }}
              >
                {navData.map((el, i) => {
                  return (
                    <Link
                      key={i}
                      href={el.route}
                      style={{
                        textDecoration: "none",
                        borderBottom: "1px solid #333",
                      }}
                    >
                      <Typography
                        margin={"10px 20px"}
                        color={"white"}
                        fontSize={"1.4rem"}
                        sx={{ "&:hover": { color: "limegreen" } }}
                      >
                        {el.name}
                      </Typography>
                    </Link>
                  );
                })}
              </Stack>
            </Stack>
          )}
        </Stack>
      </Stack>
    );
  }
}
