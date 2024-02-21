"use client";
import { Box, Button, Container, IconButton, Stack } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";

const Footer = () => {

    const navItems = [
        {
          route: "Home",
          pathname: "/",
        },
        {
          route: "Pages",
          pathname: "/pages",
        },
        {
          route: "Category",
          pathname: "/category",
        },
        {
          route: "News",
          pathname: "/news",
        },
        {
          route: "About",
          pathname: "/about",
        },
        {
          route: "Contact",
          pathname: "/contact",
        },
      ];

  return (
    <div>
      <Box className="bg-black px-2 py-10">
        <Container className="text-center">
          <Box sx={{
                "& svg": {
                  color: "white",
                },
              }}>
              <IconButton>
                <FacebookIcon />
              </IconButton>
              <IconButton>
                <FacebookIcon />
              </IconButton>
              <IconButton>
                <FacebookIcon />
              </IconButton>
              <IconButton>
                <FacebookIcon />
              </IconButton>
          </Box>
          <Box className="w-full text-center">
            {navItems.map((item) => (
              <Link key={item} href={item.pathname}>
                <Button className="text-white">
                    {item.route}
                </Button>
              </Link>
            ))}
          </Box>
          <Box>
            <p className="text-gray-500 text-sm">&copy;2024 All right reserved by Ibrahim Kayum </p>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Footer;
