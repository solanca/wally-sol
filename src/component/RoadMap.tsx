import { Grid, Typography } from "@mui/material"

type Props = {}

const RoadMap = (_props: Props) => {
  return (
   <section id="roadmap">
    <Grid container justifyContent={"center"} mt={2}>
        <Typography color={"azure"} variant="h2" textAlign={"center"}>
          Roadmap
        </Typography>
      </Grid>
      <img src="assets/roadmap.webp" width={"100%"} alt="roadmap" />
   </section>
  )
}

export default RoadMap