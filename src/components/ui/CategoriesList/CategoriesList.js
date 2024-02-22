import { getAllCategories } from "@/utils/getAllCategories";
import { Button, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";

const CategoriesList = async() => {
    const {data} = await getAllCategories()
    // console.log(data);
    return (
        <div className="mt-5 bg-gray-100 px-5 py-3">
            <Typography variant="h6" >All Categories</Typography >
                <Divider />
                <Stack rowGap={1} sx={{mt:2.5}}>
                    {
                        data.map(item => <Button key={item.id} variant="outlined">
                           <Link href={`/category/news?category=${item.title.toLowerCase()}`}>
                           {item.title}
                           </Link>
                        </Button>)
                    }
                </Stack>
        </div>
    );
};

export default CategoriesList;