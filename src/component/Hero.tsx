import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Header from "./Header";

function Hero() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md')); 
  return (
    <section className="hero" >
      <Header/>
      {/* <img src="assets/img/ready/website.png" /> */}
      {/* <Grid container justifyContent={"center"}> */}

      <Box sx={{ position: "absolute", top: matches?200 : 300, right: matches? 0: 300 }}>
        <Box sx={{ position: "relative" }}>
          <img
            src="assets/img/ready/ready-contract-background.svg"
            style={{maxWidth:'560px'}}
            height={"120px"}
            // width={"560px"}
          />

          <Grid container justifyContent={"center"}>
            <Typography
              className="ca"
              sx={{
                position: "absolute",
                top: 20,
                textTransform: "capitalize",
              }}
              variant="h4"
            >
              Contract Address:{" "}
            </Typography>
            {/* <Typography
              className="ca"
              sx={{ position: "absolute", top: 60 }}
              variant="h6"
            >
              E6NeSa1mYXvShN78N1rQPkDAcsT4e4uJ9rEg9h8QPGpZ{" "}
            </Typography> */}
          </Grid>
          <button
            style={{
              background:
                ' url("assets/img/ready/ready-copy-button-background.svg") center center no-repeat',
              backgroundSize: "contain",
              transform: "rotate(-4deg)",
              right: "-20px",
              bottom: "-24px",
              position: "absolute",
              padding: "16px 32px",
              border: "none",
            }}
          >
            Copy
          </button>
        </Box>
      </Box>
    
      
    </section>
  );
}

export default Hero;
