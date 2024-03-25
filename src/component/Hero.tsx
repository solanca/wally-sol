import { Box, Button, ButtonBase, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const MESSAGES = [
  "Seems like\nu planned a date\nwith someone",
  "did you ever talk\nto a wally?",
  "I’LL BE YOUR LAST\nwally TONIGHT",
];
function Hero() {
  const [message, setMessage] = useState<string>(MESSAGES[0]);
  useEffect(() => {
    let CURRENT_MESSAGE = 1;
    setInterval(() => {
      CURRENT_MESSAGE++;
      setMessage(MESSAGES[CURRENT_MESSAGE % MESSAGES.length]);
    }, 5000);
  }, []);

  return (
    <section className="hero">
      <img src="assets/img/ready/website.png"/>
      <Grid container justifyContent={"center"}>

      <Box sx={{position:'absolute',top:120}} >
        <Box sx={{position:'relative'}}>

      <img src="assets/img/ready/ready-contract-background.svg"height={'110px'}/>

<Grid container justifyContent={"center"}>

<Typography className="ca" sx={{position:'absolute',top:20,textTransform:'capitalize'}} variant="h4"  >Contract Address:  </Typography>
{/* <Typography className="ca" sx={{position:'absolute',top:60}} variant="h6"  >E6NeSa1mYXvShN78N1rQPkDAcsT4e4uJ9rEg9h8QPGpZ  </Typography> */}
</Grid>
        <button style={{background:' url("assets/img/ready/ready-copy-button-background.svg") center center no-repeat',backgroundSize:'contain',transform:'rotate(-4deg)',right:"-20px",bottom:"-24px",position:'absolute',padding:'16px 32px',border:'none'}}>Copy</button>
        </Box>
      </Box>
      </Grid>

      {/* <div className="hero__container container"> */}
        {/* <div className="hero__cat">
          <img src="assets/img/hero/1.png" alt="1" />
          <div className="hero__message hero-message">
            <img
              className="hero-message__background"
              src="assets/img/hero/hero-message.png"
              alt=""
            />
            <Typography variant="h4" className="hero-message__text">{message}</Typography> */}
        {/* </div>
        </div> */} 
        {/* <div className="hero__col">
          <div className="hero__top"> */}
            {/* <img
              className="hero__suptitle"
              src="assets/img/logo.png"
              alt="" /> */}
            {/* <div className="hero__lang lang">
              <ul className="lang__list"> */}
                {/* <li className="lang__item" onclick="window.location.href = '/'">
            EN
          </li>
          <li className="lang__item" onclick="window.location.href='/cn/'">
            CN
          </li> */}
              {/* </ul>
            </div>
          </div> */}
          {/* <div className="hero__title">
            <Grid container justifyContent={"center"}> */}
              

          {/* <Typography variant="h6" className="hero__title">   </Typography> */}
            {/* NEVER FALL IN<br />LOVE WITH A<br /><span>meme coin</span> */}
            {/* </Grid>
          </div> */}
          {/* <div className="hero__row">
            <a
              className="hero__btn hero__btn_lg"
              href="https://raydium.io/swap/?outputCurrency=AcY6RWuWKM5NU7BeSE4c4zQxBZpyU7pTLNF3g5DTWUC2"
            >
              GET $wally
            </a>
            <div className="hero__socials">
              <a
                className="hero__btn hero__btn_sm"
                href="https://twitter.com/wallyonsol"
              >
                <img src="assets/svg/twitter.svg" />
              </a>
              <a
                className="hero__btn hero__btn_sm"
                href="https://t.me/wallysolana"
              >
                <img src="assets/svg/telegram.svg" />
              </a>
              <a className="hero__btn hero__btn_sm" href="https://dextools.io/">
                <img src="assets/svg/dextool.svg" />
              </a>
            </div>
          </div> */}
        {/* </div>
      </div> */}
    </section>
  );
}

export default Hero;
