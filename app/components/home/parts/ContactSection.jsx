import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import {
  TextField,
  Button,
  Grid,
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
    <>
      <Stack p={"30px 50px 0 50px"}>
        <Typography color="white" fontFamily={"Lora"} fontSize={"50px"}>
          we mean business.
        </Typography>
        <Typography
          color="white"
          fontFamily={"Lora"}
          fontSize={"90px"}
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
      <Stack direction={"row"} p={"50px 0px"}>
        <Stack width={"30%"} gap={"20px"} margin={"auto"}>
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
            {/* <Box
            color="white"
            display={"flex"}
            gap={"10px"}
            flexDirection={"column"}
          >
            <li>
              Validate your situation with our business advisors and IT
              executives
            </li>
            <li>
              Understand business results, not just technical implications
            </li>
            <li>Discuss possible solutions</li>
            <li>Achieve a better knowledge of the best choices</li>
            <li>Get a cost estimate, no obligation</li>
          </Box> */}
          </Stack>
        </Stack>

        <Stack
          width={"50%"}
          sx={{
            maxWidth: "700px",
            margin: "auto",
            padding: "2rem",
            borderRadius: "8px",
          }}
        >
          {/* <h2
            style={{
              color: "white",
              textAlign: "center",
              marginBottom: "2rem",
              fontWeight: "bold",
              fontSize: "50px",
            }}
          >
            Contact us
          </h2> */}
          <Grid container spacing={2}>
            <Grid item xs={6}>
              {/* <TextField
              sx={{
                color: "#fff",
                border: "1px solid #ddd",
                "& .MuiInputBase-input::placeholder": {
                  color: "#fff",
                },
                "& .MuiOutlinedInput-root": {
                  color: "#fff", // This sets the text color inside the input to white
                },
                "& .MuiInputLabel-root": {
                  color: "#fff", // This sets the label color to white
                },
              }}
              label="First name"
              variant="outlined"
              fullWidth
            /> */}
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
            </Grid>
            <Grid item xs={6}>
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
            </Grid>
            <Grid item xs={12}>
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
            </Grid>
            <Grid item xs={12}>
              <MuiTelInput
                value={phone}
                onChange={handlePhoneChange}
                defaultCountry="IN"
                //   sx={{
                //     width: "100%",
                //     color: "#fff",
                //     border: "1px solid #ddd",
                //     "& .MuiInputBase-input::placeholder": {
                //       color: "#fff",
                //     },
                //     "& .MuiOutlinedInput-root": {
                //       color: "#fff", // This sets the text color inside the input to white
                //     },
                //     "& .MuiInputLabel-root": {
                //       color: "#fff", // This sets the label color to white
                //     },
                //   }}
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
              />
            </Grid>
            <Grid item xs={12}>
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
                label="Message"
                variant="outlined"
                fullWidth
                required
                multiline
                rows={4}
                placeholder="Let's talk about your business needs"
              />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <Button
                variant="contained"
                sx={{
                  borderRadius: "8px",
                  padding: "0.5rem 2rem",
                  bgcolor: "#005900",
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Stack>
      </Stack>
    </>
  );
};

export default ContactSection;
