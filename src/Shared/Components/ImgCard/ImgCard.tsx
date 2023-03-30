import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SendIcon from "@mui/icons-material/Send";
import Skeleton from "@mui/material/Skeleton";
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
    <Card sx={{ width: "100%" }}>
      {!img ? (
        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
      ) : (
        <CardMedia
          component="img"
          alt="No image found"
          image={img}
          sx={{ objectFit: "fill", height: "200px" }}
        />
      )}

      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {!title ? (
          <Skeleton
            animation="wave"
            height={10}
            width="80%"
            style={{ marginBottom: 6 }}
          />
        ) : (
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ height: "60px" }}
          >
            {title}
          </Typography>
        )}
        {!description ? (
          <Skeleton
            animation="wave"
            height={10}
            width="80%"
            style={{ marginBottom: 6 }}
          />
        ) : (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ height: "100px" }}
          >
            {description}
          </Typography>
        )}
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
