import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SendIcon from "@mui/icons-material/Send";
interface ImgCardProps {
  img: string;
  title: string;
  description: string;
  buttonText: string;
  buttonOnClick?: any;
}
export default function ImgCard({
  img,
  title,
  description,
  buttonText,
  buttonOnClick,
}: ImgCardProps) {
  return (
    <Card sx={{ width: "100%" }}>
      <CardMedia
        component="img"
        alt="No image found"
        height="180"
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          size="small"
          endIcon={<SendIcon />}
          fullWidth
          onClick={buttonOnClick}
        >
          {buttonText}
        </Button>
      </CardActions>
    </Card>
  );
}
