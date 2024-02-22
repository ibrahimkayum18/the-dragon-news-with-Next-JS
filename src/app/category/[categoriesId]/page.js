import { getDynamicCategories } from "@/utils/getDynamicCategories";
import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import Image from "next/image";

const DynamicCategories = async ({ params, searchParams }) => {
  const { data } = await getDynamicCategories(searchParams.category);
  console.log(data);
  console.log(searchParams.category);

  return (
    <div className="my-5">
      <div className="text-2xl ">
        {searchParams.category == "all-news" ? (
          <h1>
            <span className="font-bold">
              {searchParams.category.toUpperCase()}
            </span>
            : {data.length}
          </h1>
        ) : (
          <h1>
            Total{" "}
            <span className="font-bold">
              {searchParams.category.toUpperCase()}
            </span>{" "}
            News: {data.length}
          </h1>
        )}
      </div>
      <Stack className="grid grid-cols-2 gap-5">
        {data.map((item) => (
          <Card key={item.id}>
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
          </Card>
        ))}
      </Stack>
    </div>
  );
};

export default DynamicCategories;
