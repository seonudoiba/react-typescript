import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import { useState } from "react";

type ProductsProps = {
  products:
    | {
        id: number;
        title: string;
        price: number;
        rating: { rate: number; count: number };
        image: string;
        category: string;
        description: string;
      }[]| null;
};
type CartProps={
  getCart: (params: any) => any
}

type Props = ProductsProps & CartProps;
const Home: React.FC<Props> = ({ products, getCart }) => {
  // const star = useContext(FavContext);

  let [Cart, SetCart] = useState<string[]>([]);
  getCart(Cart)

  let AddToCart = (event: React.MouseEvent<HTMLElement>) : void=> {
    let eventer = event.target as HTMLInputElement
    SetCart([...Cart, JSON.parse(eventer.value)]);
    
    // SetCart({
    //     id: 5,
    //     title: 'dgfs',
    //     price: 45,
    //     rating: { rate: 45, count: 45 },
    //     image: 'string',
    //     category: 'string',
    //     description: 'string',
    // });
    // (prevstate) => prevstate ? [...prevstate, event.target.value] //
  };

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
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            item
            xs={12}
            sm={6}
            md={3}
            lg={3}
            xl={2}
            key={index}
          >
            <Card sx={{ maxWidth: 350 }}>
              <CardActionArea>
                {/* <CardMedia
                  component="img"
                  height="240"
                  image={product.image}
                  alt="green iguana"
                /> */}
                <div className="image-container">
                  <img
                    className="image"
                    src={product.image}
                    alt={product.title}
                  />
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

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  p: 1,
                  m: 1,
                  bgcolor: "background.paper",
                  borderRadius: 1,
                }}
              >
                <Button size="small" color="primary">
                  <Rating
                    precision={0.1}
                    name="read-only"
                    value={product.rating.rate}
                    readOnly
                  />
                </Button>
                <Button
                  onClick={AddToCart}
                  value={JSON.stringify(product)}
                  variant="contained"
                  size="small"
                  aria-label="add to shopping cart">
                  Add to Cart
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Home;
