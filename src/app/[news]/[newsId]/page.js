import { getSingleNews } from "@/utils/getSingleNews";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const NewsDetailsPage = async ({ params }) => {
  const { data } = await getSingleNews(params.newsId);
  console.log(data);
  return (
    <Box className="mt-5">
      <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Image
              src={data.thumbnail_url}
              alt={params.newsId}
              width={800}
              height={500}
            />
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              className="mt-4"
            >
              <Grid item xs={6}>
                <Image
                  src={data?.image_url}
                  alt={params.newsId}
                  width={800}
                  height={500}
                />
              </Grid>
              <Grid item xs={6}>
                <Image
                  src={data?.image_url}
                  alt={params.newsId}
                  width={800}
                  height={500}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h4" component="h2">
                {data?.title}
            </Typography>
            <Box sx={{
                display:"flex",
                gap: 3,
                alignItems: "center"
            }}>
            <Avatar alt={data?.author?.name} src={data?.author?.img} />
            <Typography variant="h6" component="h2">
               By {data?.author?.name},
            </Typography>
            <Typography variant="h6" component="h2">
               Published: {data?.author?.published_date}
            </Typography>
            </Box>
            <Typography style={{
                textAlign: "justify",
                whiteSpace: "pre-line",
                margin: '20px 0',
                color: "gray"
            }}>
              {data.details}
            </Typography>
            <Typography variant="h6">
               ``Many desktop publishing packages and web page editors now use as their default model text!``
            </Typography>
            <Typography style={{
                color:"gray",
                marginBottom: "20px"
            }}>
               -S M Ibrahim Kayum
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NewsDetailsPage;
