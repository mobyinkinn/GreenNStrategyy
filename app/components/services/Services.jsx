import { Box, Typography, Stack } from "@mui/material";
import Navbar from "../navbar/Navbar";
import { serviceData } from "../home/parts/serviceData";
import ServiceCard from "../home/parts/ServiceCard";

export default function Services() {
  return (
    <Stack
      margin={{
        xs: "50px 20px",
        md: "50px 70px",
      }}
      color={"white"}
      gap={{ smm: "30px", xs: "10px" }}
      id={"service"}
    >
      {/* <h2
        style={{
          color: "#005900",
          marginBottom: "20px",
          fontSize: "2rem",
          textAlign: "center",
        }}
      >
        Our Services
      </h2> */}
      {/* <Stack direction={"row"}>
        <Typography
          className="text-stroke"
          fontSize={"70px"}
          color="transparent"
          fontWeight={"bold"}
          lineHeight={1}
          fontFamily= {"Lora"}
        >
          We Are&nbsp;
        </Typography>
        <span
          style={{ color: "#008D46", fontWeight: "bold", fontSize: "70px" }}
        >
          Offering:-
        </span>
      </Stack> */}
      <Stack direction={"row"} gap={"20px"} alignItems={"Center"}>
        <Typography
          color="white"
          fontFamily={"Lora"}
          fontSize={{ xs: "40px", md: "70px" }}
        >
          <span style={{ color: "#005900", fontWeight: "bold" }}>What</span> We
          do
        </Typography>
      </Stack>
      <Stack
        direction={{
          md: "row",
        }}
        sx={{
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {serviceData.map((el) => (
          <ServiceCard
            name={el.name}
            data={el.data}
            key={el.id}
            path={el.path}
          />
        ))}
      </Stack>
    </Stack>
  );
}
