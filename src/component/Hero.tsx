import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Header from "./Header";

function Hero() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <section className="hero">
      <Header />
      <img src="assets/img/ready/website 4.png" style={{ borderRadius: 4 }} />
      {/* <Grid container justifyContent={"center"}> */}
      {!matches ? (
        <Box
          sx={{
            position: "absolute",
            top: matches ? 180 : 300,
            right: matches ? 10 : 300,
          }}
        >
          <Box sx={{ position: "relative" }}>
            <img
              src="assets/img/ready/ready-contract-background.svg"
              style={{
                maxWidth: matches ? "200px" : "560px",
                height: matches ? "60px" : "120px",
              }}
            />

            <Grid container justifyContent={"center"}>
              {!matches && (
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
              )}
              <Typography
                variant={matches ? "caption" : "h6"}
                className="ca"
                sx={{ position: "absolute", top: matches ? 10 : 60, left: 40 }}
              >
                {matches
                  ? "E6NeSa1mYXvShN78\nT4e4uJ9rEg9h8QPGpZ"
                  : " E6NeSa1mYXvShN78...T4e4uJ9rEg9h8QPGpZ"}{" "}
              </Typography>
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
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pt: 4,
            px: 4,
            pb: 4,
            backgroundColor: "#3A8FC9",
          }}
        >
          <Box>
            <Typography variant="h4" color={"azure"}>
              Contract Address:
            </Typography>
            <Typography color={"azure"}>
              E6NeSa1mYXvShN78...T4e4uJ9rEg9h8QPGpZ
            </Typography>
          </Box>
          <button
            style={{
              background:
                ' url("assets/img/ready/ready-copy-button-background.svg") center center no-repeat',
              backgroundSize: "contain",
              transform: "rotate(-4deg)",
              padding: "16px 32px",
              border: "none",
            }}
          >
            Copy
          </button>
        </Box>
      )}
    </section>
  );
}

export default Hero;
