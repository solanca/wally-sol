import { Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Bubble from "./Bubble";

type Props = {};

const Ready = (_props: Props) => {
  // Define the animation variant

  return (
    <section className="ready">
      <Grid container justifyContent={"center"} mt={2}>
        <Typography color={"azure"} variant="h2" textAlign={"center"}>
          How to buy $wally
        </Typography>
      </Grid>
      <Grid container mt={2} alignItems={"center"} spacing={4}>
        <Grid item md={6} sm={12} xs={12}>
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
              <img src="assets/website assets/3.png" alt="" />
            </motion.div>
          </div>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <div style={{ position: "relative" }}>
            <Bubble y1={300} x={0} y={-50} x1={0} />
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                repeat: Infinity,
              }}
            >
              <img src="assets/website assets/5.png" alt="" />
            </motion.div>
          </div>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <div style={{ position: "relative" }}>
            <Bubble y1={200} x={150} y={-130} x1={0} />

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                repeat: Infinity,
              }}
            >
              <img src="assets/website assets/2.png" alt="" />
            </motion.div>
          </div>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <div style={{ position: "relative" }}>
            <Bubble x={0} y={-50} x1={60} y1={300} />
            <Bubble x={30} y={-50} delay={0.5} x1={0} y1={200} />
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
              <img src="assets/website assets/4.png" alt="" />
            </motion.div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Ready;
