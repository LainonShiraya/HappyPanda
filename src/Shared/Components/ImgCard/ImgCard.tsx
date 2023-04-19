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
  children?: any;
}
export default function ImgCard({
  img,
  title,
  description,
  buttonText,
  buttonOnClick,
  children,
}: ImgCardProps) {
  return (
    <Card
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        alt="No image found"
        image={img}
        sx={{ objectFit: "fill", height: "200px"}}
      />

      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          margin: "auto",
          flexGrow: "1",
          flexDirection: "column",
        }}
      >
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          style={{ marginBottom: 6 }}
        >
          {description}
        </Typography>
        {children}
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
