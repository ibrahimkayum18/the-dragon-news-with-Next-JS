"use client";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
// import React from "react";
import topNews from "@/assets/top-news.png";
import topNews2 from "@/assets/top-news2.png";
import Image from "next/image";
import { Fullscreen } from "@mui/icons-material";

const latestNews = () => {
  return (
    <>
      <Box className="my-5">
        <Card sx={{ minWidth: 345 }}>
          <CardMedia>
            <Image src={topNews} width={800} alt="top news" />
          </CardMedia>
          <CardContent>
            <p className="inline-block bg-red-500 rounded-md text-white py-2 px-4 my-4">
              Technology
            </p>
            <Typography gutterBottom variant="h5" component="div">
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
            </Typography>
            <Typography gutterBottom className="my-3">
              By S M Ibrahim Kayum - Feb 22 2024
            </Typography>
            <Typography variant="body2" color="text.secondary">
              It is long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout
            </Typography>
          </CardContent>
        </Card>

        <Grid
          className="mt-5"
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={6}>
            <Card sx={{ minWidth: 345 }}>
              <CardMedia>
                <Image src={topNews2} width={800} alt="top news" />
              </CardMedia>
              <CardContent>
                <p className="inline-block bg-red-500 rounded-md text-white py-2 px-4 my-4">
                  Technology
                </p>
                <Typography gutterBottom variant="h5" component="div">
                  Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                  Again
                </Typography>
                <Typography gutterBottom className="my-3">
                  By S M Ibrahim Kayum - Feb 22 2024
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  It is long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ minWidth: 345 }}>
              <CardMedia>
                <Image src={topNews2} width={800} alt="top news" />
              </CardMedia>
              <CardContent>
                <p className="inline-block bg-red-500 rounded-md text-white py-2 px-4 my-4">
                  Technology
                </p>
                <Typography gutterBottom variant="h5" component="div">
                  Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                  Again
                </Typography>
                <Typography gutterBottom className="my-3">
                  By S M Ibrahim Kayum - Feb 22 2024
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  It is long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ minWidth: 345 }}>
              <CardMedia>
                <Image src={topNews2} width={800} alt="top news" />
              </CardMedia>
              <CardContent>
                <p className="inline-block bg-red-500 rounded-md text-white py-2 px-4 my-4">
                  Technology
                </p>
                <Typography gutterBottom variant="h5" component="div">
                  Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                  Again
                </Typography>
                <Typography gutterBottom className="my-3">
                  By S M Ibrahim Kayum - Feb 22 2024
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  It is long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ minWidth: 345 }}>
              <CardMedia>
                <Image src={topNews2} width={800} alt="top news" />
              </CardMedia>
              <CardContent>
                <p className="inline-block bg-red-500 rounded-md text-white py-2 px-4 my-4">
                  Technology
                </p>
                <Typography gutterBottom variant="h5" component="div">
                  Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                  Again
                </Typography>
                <Typography gutterBottom className="my-3">
                  By S M Ibrahim Kayum - Feb 22 2024
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  It is long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default latestNews;
