import { Grid, Typography } from "@mui/material";
import {motion} from "framer-motion";
import Bubble from "./Bubble";
import Fish from "./Fish";

type Props = {};

const About = (_props: Props) => {
  return (
    <>
      <Grid container justifyContent={"center"} mt={2}>
        <Typography color={"azure"} variant="h2" textAlign={"center"}>
          About me
        </Typography>
      </Grid>
      <Grid container alignItems={"center"} spacing={2} sm={12} xs={12}>
        <Grid item md={6}>
            <Grid container justifyContent={"center"}>

        <div style={{ position: "relative" }}>
            <Bubble y1={200} x={0} y={30} x1={0} />
            <Bubble y1={150} x={30} y={30} delay={0.5} x1={40} />
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{
                y: [-10, 0, -10],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                repeat: Infinity,
              }}
            >
          <img src="assets/wally_nice_guy.png" width={"80%"} />
            </motion.div>
          </div>
            </Grid>
        </Grid>
        <Grid item md={6}>
          <img src="assets/about_me.png" />
        </Grid>
      </Grid>
      <Fish
          fish={2}
          animate={{
            x: [window.innerWidth - 100, window.innerWidth * 0.5, -100],
            y: [-100, -300, -550],
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            times: [0, 0.3, 1],
            repeat: Infinity,
          }}
        />
    </>
  );
};

export default About;
