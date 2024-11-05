"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Roboto } from "@next/font/google";
import { Poppins } from "@next/font/google";
import { createTheme, ThemeProvider } from "@mui/material";
import CustomCursor from "./components/CustomCursor";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 300,
      sm: 420,
      smm: 510,
      md: 768,
      lg: 1024,
      xll: 1220,
      xl: 1440,
    },
  },
});

const roboto = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const metadata = {
  title: "Green n Strategy",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body className={roboto.className}>
          <CustomCursor />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
