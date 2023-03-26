import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import Panda_bamboo from "../../../assets/food/panda_about_us_bamboo_looking_left.png";

const AboutUsSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingBlock: "4rem",
      }}
    >
      <Box
        sx={{
          width: { sm: "80%", lg: "60%" },
          textAlign: "center",
          marginRight: { md: "auto", lg: "0" },
        }}
      >
        <Typography
          component="h2"
          variant="h2"
          sx={{
            color: "var(--font-color-light-300)",
            fontWeight: "700",
            fontFamily: "var(--font-family-bold)",
            margin: "auto",
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            marginBottom: "2rem",
            flexDirection: { xs: "column", md: " row" },
            fontSize: { xs: "4rem" },
          }}
        >
          About
          <Typography
            component="span"
            variant="h2"
            sx={{
              color: "var(--font-color-light-100)",
              fontWeight: "700",
              fontFamily: "var(--font-family-bold)",
            }}
          >
            Happy{" "}
          </Typography>
          Panda
        </Typography>
        <Typography
          component="span"
          variant="h6"
          sx={{
            color: "var(--font-color-light-300)",
            fontWeight: "300",
            fontFamily: "var(--font-family-bold)",
            textAlign: "center",
          }}
        >
          A good Asian cousine restaurant is not only the high quality of
          dishes. It is as well the connection between the clients and us. Since
          the 2019 we give our best to the atmosphere and attitiude , as well as
          the food we serve. We decided to bring the cousine on another level,
          beacuse as we like to experience it, hope you do too.
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          right: "0",
          bottom: "0",
          display: { xs: "none", md: "block" },
        }}
      >
        <img src={Panda_bamboo} alt="Panda Bamboo" />
      </Box>
    </Box>
  );
};

export default AboutUsSection;
