import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

interface ProductTemplateProps {
  title: string;
  children: any;
}
const ProductTemplate = ({ title, children }: ProductTemplateProps) => {
  return (
    <Box id={title.toLowerCase()}>
      <Typography variant="h4" component="h4" sx={{ marginTop: "2rem" }}>
        {title}
      </Typography>
      <hr style={{ width: "40vw", marginLeft: "0", marginBottom: "2rem" }} />
      {children}
    </Box>
  );
};

export default ProductTemplate;
