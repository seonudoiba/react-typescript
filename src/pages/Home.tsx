import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

interface user {
  map(arg0: (item: any) => JSX.Element): import("react").ReactNode;
}
type ProductsProps = {
  products?:
    | {
        id: number;
        title: string;
        price: number;
        rating: { rate: number; count: number };
        image: string;
        category: string;
        description: string;
      }[]
    | null;
};

const Home = ({ products }: ProductsProps) => {
  // const star = useContext(FavContext);

  //   console.log(star)
  //   console.log('star')
  return (
    <Box sx={{ flexGrow: 1 }} pt={0.5}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {products?.map((product, index) => (
          <Grid item xs={12} sm={4} md={3} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                {/* <CardMedia
                  component="img"
                  height="240"
                  image={product.image}
                  alt="green iguana"
                /> */}
                <div className="image-container">
                  <img className="image" src={product.image} alt={product.title} />
                </div>
                <CardContent>
                  <Typography gutterBottom variant="h5" noWrap component="div">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" noWrap color="text.secondary">
                    {product.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                <Rating precision={0.1} name="read-only" value={product.rating.rate} readOnly />
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Home;
