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
import { getAllNews } from "@/utils/getAllNews";
import Link from "next/link";

const latestNews = async() => {
  const {data} = await getAllNews();
  return (
    <>
      <Box className="my-5">
      <Card>
        {
            data.slice(0,1).map(item => <Grid key={item._id} item>
            <Card sx={{ minWidth: 345 }}>
            <Link href={`/${item.category.toLowerCase()}/${item._id}`}>
              <CardMedia
                sx={{
                  "& img": {
                    width: "100%",
                    height: "100%",
                  },
                }}
              >
                <Image
                  src={item.thumbnail_url}
                  width={800}
                  height={200}
                  alt="top news"
                />
              </CardMedia>
              <CardContent>
                <p className="inline-block bg-red-500 rounded-md text-white py-2 px-4 my-2">
                  {item.category}
                </p>
                <Typography gutterBottom variant="h6" component="div">
                  {item.title.length > 30
                    ? item.title.slice(0, 30) + "..."
                    : item.title}
                </Typography>
                <Typography gutterBottom className="my-3">
                  By {item.author.name} - {item.author.published_date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.details.length > 200
                    ? item.details.slice(0, 200) + "..."
                    : item.details}
                </Typography>
              </CardContent>
            </Link>
            </Card>
          </Grid>)
          }
        </Card>

        <Grid
          className="mt-5"
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {
            data.slice(1,5).map(item => <Grid key={item._id} item xs={6}>
            <Card sx={{ minWidth: 345 }}>
            <Link href={`/${item.category.toLowerCase()}/${item._id}`}>
              <CardMedia
                sx={{
                  "& img": {
                    width: "100%",
                    height: "250px",
                  },
                }}
              >
                <Image
                  src={item.thumbnail_url}
                  width={800}
                  height={200}
                  alt="top news"
                />
              </CardMedia>
              <CardContent>
                <p className="inline-block bg-red-500 rounded-md text-white py-2 px-4 my-2">
                  {item.category}
                </p>
                <Typography gutterBottom variant="h6" component="div">
                  {item.title.length > 30
                    ? item.title.slice(0, 30) + "..."
                    : item.title}
                </Typography>
                <Typography gutterBottom className="my-3">
                  By {item.author.name} - {item.author.published_date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.details.length > 200
                    ? item.details.slice(0, 200) + "..."
                    : item.details}
                </Typography>
              </CardContent>
            </Link>
            </Card>
          </Grid>)
          }
          
          
        </Grid>
      </Box>
    </>
  );
};

export default latestNews;
