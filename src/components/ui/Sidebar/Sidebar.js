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
import { getAllNews } from "@/utils/getAllNews";
import Link from "next/link";

const Sidebar = async () => {
  const { data } = await getAllNews();
  return (
    <>
      <Box className="my-5">
        <Card>
          {data.slice(5, 6).map((item) => (
            <Grid key={item._id} item xs={6}>
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
            </Grid>
          ))}
        </Card>

        <Container className="my-5">
          {data.slice(6, 10).map((item) => (
            <Card key={item._id}>
              <Link href={`/${item.category.toLowerCase()}/${item._id}`}>
                <Grid container spacing={2} className="my-5">
                  <Grid
                    item
                    xs={3}
                    sx={{
                      "& img": {
                        width: "100%",
                        height: "70px",
                      },
                    }}
                  >
                    <Image
                      src={item.thumbnail_url}
                      alt="news"
                      width={100}
                      height={100}
                      className="rounded-lg"
                    />
                  </Grid>
                  <Grid item xs={9}>
                    <Typography gutterBottom className="font-bold">
                      {item.title.length > 30
                        ? item.title.slice(0, 30) + "..."
                        : item.title}
                    </Typography>
                    <Typography gutterBottom className="my-1">
                      {item?.author?.published_date}
                    </Typography>
                  </Grid>
                </Grid>
              </Link>
            </Card>
          ))}
        </Container>

        <Container>
          <Image src={sideBottom} alt="Side Bottom Image" width={500} />
        </Container>
      </Box>
    </>
  );
};

export default Sidebar;
