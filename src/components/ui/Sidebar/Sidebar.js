import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import topNews from "@/assets/side-top-news.png";
import blankImage from "@/assets/blankImage.png";
import sideBottom from "@/assets/side-bottom-img.png";

const Sidebar = () => {
  return (
    <>
      <Box className="my-5">
        <Card>
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

        <Container className="my-5">
          <Grid container spacing={2} className="my-5">
            <Grid item xs={3}>
              <Image src={blankImage} alt="news" width={100} />
            </Grid>
            <Grid item xs={9}>
              <Typography gutterBottom className="font-bold">
                Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
              </Typography>
              <Typography gutterBottom className="my-1">
                Feb 22 2024
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2} className="my-5">
            <Grid item xs={3}>
              <Image src={blankImage} alt="news" width={100} />
            </Grid>
            <Grid item xs={9}>
              <Typography gutterBottom className="font-bold">
                Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
              </Typography>
              <Typography gutterBottom className="my-1">
                Feb 22 2024
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2} className="my-5">
            <Grid item xs={3}>
              <Image src={blankImage} alt="news" width={100} />
            </Grid>
            <Grid item xs={9}>
              <Typography gutterBottom className="font-bold">
                Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
              </Typography>
              <Typography gutterBottom className="my-1">
                Feb 22 2024
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2} className="my-5">
            <Grid item xs={3}>
              <Image src={blankImage} alt="news" width={100} />
            </Grid>
            <Grid item xs={9}>
              <Typography gutterBottom className="font-bold">
                Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
              </Typography>
              <Typography gutterBottom className="my-1">
                Feb 22 2024
              </Typography>
            </Grid>
          </Grid>
        </Container>

        <Container>
            <Image src={sideBottom} alt="Side Bottom Image" width={500} />
        </Container>
      </Box>
    </>
  );
};

export default Sidebar;
