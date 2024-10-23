import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import banner from "@/public/assets/contact.png";

const ContactSection = () => {
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (newPhone) => {
    setPhone(newPhone);
  };
  return (
    <Stack margin={"50px 0"} id={"contact"}>
      <Stack margin={{ xs: "0 30px", md: "30px 50px 0 50px" }}>
        <Typography
          color="white"
          fontFamily={"Lora"}
          fontSize={{ xs: "30px", md: "50px" }}
        >
          we mean business.
        </Typography>
        <Typography
          color="white"
          fontFamily={"Lora"}
          fontSize={{ xs: "60px", md: "90px" }}
          lineHeight={1}
        >
          reach out&nbsp;
          <span style={{ color: "#005900", fontWeight: "bold" }}>
            now.
          </span>{" "}
        </Typography>
      </Stack>
      <Stack alignItems={"end"} width={"70%"}>
        <Box
          sx={{
            content: "''",
            width: "600px",
            height: "1px",
            bgcolor: "#655d5d",
          }}
        />
      </Stack>
      <Stack
        direction={{
          md: "row",
        }}
        p={"50px 0px"}
      >
        <Stack
          width={{ md: "30%" }}
          gap={"20px"}
          margin={{ xs: "0 30px", md: "auto" }}
        >
          <Stack gap={"5px"}>
            <Typography color="white" fontSize={"20px"} fontFamily={"Lora"}>
              We greatly appreciate your interest.
            </Typography>
          </Stack>
          <Stack gap={"20px"}>
            <Typography color="#005900" fontSize={"20px"}>
              If you're in the Real Estate, Food and Beverage, E-commerce, or
              any other business sector, our team has you covered!
            </Typography>
          </Stack>
        </Stack>

        <Stack
          width={{ md: "50%" }}
          margin={{
            md: "auto",
          }}
          gap={"15px"}
          sx={{
            maxWidth: "700px",
            padding: "30px",
          }}
        >
          <Stack direction={{ md: "row" }} gap={"15px"}>
            <TextField
              sx={{
                "& .MuiInputBase-input::placeholder": {
                  color: "#fff",
                },
                "& .MuiOutlinedInput-root": {
                  color: "#fff", // Text color
                  "& fieldset": {
                    borderColor: "#ddd", // Normal border color
                  },
                  "&:hover fieldset": {
                    borderColor: "#aaa", // Hover border color
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#fff", // Focused border color
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#fff", // Label color when not focused
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#fff", // Label color when focused
                },
              }}
              label="First name"
              variant="outlined"
              fullWidth
              required
              placeholder="Enter your first name"
              InputProps={{
                style: { color: "#fff" }, // Text input color
              }}
            />
            <TextField
              sx={{
                "& .MuiInputBase-input::placeholder": {
                  color: "#fff",
                },
                "& .MuiOutlinedInput-root": {
                  color: "#fff", // Text color
                  "& fieldset": {
                    borderColor: "#ddd", // Normal border color
                  },
                  "&:hover fieldset": {
                    borderColor: "#aaa", // Hover border color
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#fff", // Focused border color
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#fff", // Label color when not focused
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#fff", // Label color when focused
                },
              }}
              label="Last name"
              variant="outlined"
              fullWidth
              required
            />
          </Stack>
          <TextField
            sx={{
              "& .MuiInputBase-input::placeholder": {
                color: "#fff",
              },
              "& .MuiOutlinedInput-root": {
                color: "#fff", // Text color
                "& fieldset": {
                  borderColor: "#ddd", // Normal border color
                },
                "&:hover fieldset": {
                  borderColor: "#aaa", // Hover border color
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#fff", // Focused border color
                },
              },
              "& .MuiInputLabel-root": {
                color: "#fff", // Label color when not focused
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#fff", // Label color when focused
              },
            }}
            label="Work Email"
            fullWidth
            required
            type="email"
            placeholder="name@company.com"
          />
          <MuiTelInput
            value={phone}
            onChange={handlePhoneChange}
            defaultCountry="AE"
            sx={{
              "& .MuiInputBase-input::placeholder": {
                color: "#fff",
              },
              "& .MuiOutlinedInput-root": {
                color: "#fff", // Text color
                "& fieldset": {
                  borderColor: "#ddd", // Normal border color
                },
                "&:hover fieldset": {
                  borderColor: "#aaa", // Hover border color
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#fff", // Focused border color
                },
              },
              "& .MuiInputLabel-root": {
                color: "#fff", // Label color when not focused
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#fff", // Label color when focused
              },
            }}
          />
          <TextField
            sx={{
              width: "100%",
              "& .MuiInputBase-input::placeholder": {
                color: "#fff",
              },
              "& .MuiOutlinedInput-root": {
                color: "#fff", // Text color
                "& fieldset": {
                  borderColor: "#ddd", // Normal border color
                },
                "&:hover fieldset": {
                  borderColor: "#aaa", // Hover border color
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#fff", // Focused border color
                },
              },
              "& .MuiInputLabel-root": {
                color: "#fff", // Label color when not focused
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#fff", // Label color when focused
              },
            }}
            label="Message"
            variant="outlined"
            fullWidth
            required
            multiline
            rows={4}
            placeholder="Let's talk about your business needs"
          />
          <Button
            variant="contained"
            sx={{
              margin: "0 auto",
              width: "200px",
              borderRadius: "8px",
              padding: "0.5rem 2rem",
              bgcolor: "#005900",
            }}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ContactSection;
