import { Box, margin } from "@mui/system";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "@/public/assets/client1.jpg";
import img3 from "@/public/assets/client2.jpg";
import img4 from "@/public/assets/client3.jpg";
import Image from "next/image";
import { Stack, Typography } from "@mui/material";

const carausel = [
  { id: 0, img: img },
  { id: 1, img: img3 },
  { id: 2, img: img4 },
  { id: 3, img: img },
  { id: 4, img: img3 },
  { id: 5, img: img4 },
  { id: 6, img: img },
  { id: 7, img: img3 },
  { id: 8, img: img4 },
  { id: 9, img: img },
  { id: 10, img: img3 },
  { id: 11, img: img4 },
];

var settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "ease",
  responsive: [
    {
      breakpoint: 1440, // For large screens
      settings: {
        slidesToShow: 8,
      },
    },
    {
      breakpoint: 1220, // For large screens
      settings: {
        slidesToShow: 7,
      },
    },
    {
      breakpoint: 1024, // For large screens
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 768, // For medium screens (tablets)
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 420, // For small screens (mobile)
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 370, // For small screens (mobile)
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};
var settingsRight = {
  dots: false,
  infinite: true,
  arrows: false,
  speed: 2000,
  rtl: true,
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "ease",
  responsive: [
    {
      breakpoint: 1440, // For large screens
      settings: {
        slidesToShow: 8,
      },
    },
    {
      breakpoint: 1220, // For large screens
      settings: {
        slidesToShow: 7,
      },
    },
    {
      breakpoint: 1024, // For large screens
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 768, // For medium screens (tablets)
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 420, // For small screens (mobile)
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 370, // For small screens (mobile)
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

export default function Carausal() {
  return (
    <Box padding={{ xs: "20px 20px", xl: "50px 50px" }}>
      <Stack direction={"row"} alignItems={"Center"} pb={2}>
        <Typography
          color="white"
          fontSize={{
            xl: "70px",
            xll: "55px",
            lg: "40px",
            md: "35px",
            xs: "30px",
          }}
        >
          Our{" "}
          <span
            style={{
              color: "#005900",
            }}
          >
            Clients
          </span>
        </Typography>
      </Stack>
      <Stack gap={"40px"}>
        <Slider {...settings}>
          {carausel.map((el, i) => {
            return <Images el={el} />;
          })}
        </Slider>
        <Slider {...settingsRight}>
          {carausel.map((el, i) => {
            return <Images el={el} />;
          })}
        </Slider>
      </Stack>
    </Box>
  );
}

function Images({ el }) {
  return (
    <Stack alignItems={"center"} justifyContent={"center"} display={"flex"}>
      <Image width={100} height={100} src={el.img} alt="" />
    </Stack>
  );
}
