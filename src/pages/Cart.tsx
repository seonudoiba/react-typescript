import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
type CartProps = {
  CartList?:
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

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Cart({ CartList }: CartProps) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Paper
      elevation={3}
      //   sx={{
      //     display: "flex",
      //     direction: "row",
      //     justifyContent: "center",
      //     alignItems: "center",
      //   }}
    >
      <>
        {CartList?.map((product) => (
          <Card
            sx={{
              display: "flex",
              direction: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <Box>
              <div className="image-container">
                <img
                  className="image"
                  src={product.image}
                  alt={product.title}
                />
              </div>
            </Box>
            <Box>
              <CardHeader
                title={product.title}
              
                subheader={
                  product.price
                } />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
            </Box>
          </Card>
        ))}
      </>
      <Card
        sx={{
          display: "flex",
          direction: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <CardHeader
            title="Check Out"
            // This arrangement can be altered based on how we want the date's format to appear.
            // "17-6-2022"
            subheader="Total Price"
          />
          <Button variant="contained">Check Out</Button>
        </Box>
      </Card>
    </Paper>
  );
}
