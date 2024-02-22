import { Grid } from "@mui/material";
import LatestNews from "@/components/ui/LatestNews/LatestNews.js";
import Sidebar from "@/components/ui/Sidebar/Sidebar.js";

const HomePage = () => {
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={8}>
           <LatestNews />
        </Grid>
        <Grid item xs={4}>
          <Sidebar />
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
