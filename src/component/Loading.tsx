import { Grid, LinearProgress, linearProgressClasses, styled } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
type Props = {};
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
  }));
const Loading = (_props: Props) => {
    const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    // // <Root>
    //   {/* <Box position={"relative"}> */}
    //   {/* <div> */}
      <Grid container justifyContent={"center"} flexDirection={"column"} alignItems={"center"} sx={{height:"100vh"}}>

          {/* <div> */}
    
    <motion.img  animate={{ rotate: [10, 0, 10] }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                repeat: Infinity,
              }} src="assets/website assets/1.png" style={{height:400,width:300}}/>
          {/* </div> */}
            {/* <motion.img
              src="assets/website assets/1.png"
              animate={{ rotate: [20, 0, 10] }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.6, 1],
                repeat: Infinity,
              }}
              initial={{ scale: 0.4 }}
            ></motion.img> */}
          {/* </div> */}
          <BorderLinearProgress sx={{width:300}} color='secondary' variant="determinate" value={progress} />
      </Grid>
    //   {/* </Box> */}

    // // </Root>
  );
};

export default Loading;
