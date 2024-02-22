import CategoriesList from "@/components/ui/CategoriesList/CategoriesList";
import { Box, Container, Grid } from "@mui/material";

const CategoruLayout = async ({ children }) => {
  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <CategoriesList />
          </Grid>
          <Grid item xs={9}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CategoruLayout;
