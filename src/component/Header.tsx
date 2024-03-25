import { Menu } from "@mui/icons-material";
import { AppBar, Box, Button, ButtonBase, Drawer, Grid, Hidden, List, ListItemButton, ListItemText, Toolbar } from "@mui/material";
import { useState } from "react";

type Props = {};

const Header = (_props: Props) => {
  const [open,setOpen] = useState<boolean>(false);
  const scrollToAboutMe = (id:string) => {
    const aboutMeSection = document.getElementById(id);
    if (aboutMeSection) {
      aboutMeSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <>
    <AppBar
    id="start"
      position="sticky"
      sx={{
        // backgroundColor:"transparent",
        // background:"linear-gradient(0deg, rgba(133,214,247,1) 0%, rgba(190,236,255,1) 43%)",
        // border:"1px solid #38B3D7",
        height: 70,
        borderRadius: 30,
        boxShadow: "1px 5px 5px #38B3D7",
        top: 30,
      }}
    >
      <Toolbar>
        <Hidden mdDown>

        <Box sx={{ position: "absolute", top: 26, left: 30 }}>

          <ButtonBase sx={{mr:4}} onClick={() => scrollToAboutMe("about")}>About Me</ButtonBase>
          <ButtonBase sx={{mr:4}} onClick={() => scrollToAboutMe("wallynomics")}>Wallynomics</ButtonBase>
          <ButtonBase sx={{mr:4}} onClick={() => scrollToAboutMe("how_to_buy")}>How to Buy</ButtonBase>
        </Box>
        </Hidden>
        <Grid container justifyContent={"center"} alignItems={"center"}>

        <img src="assets/logo.png" width={"200px"} />
        {/* <Box flexGrow={1} /> */}
        </Grid>
        <Hidden mdDown>

        <Box sx={{ position: "absolute", top: 20, right: 30 }}>
          <Button>
            <img src="assets/svg/x.svg" width={20} />
          </Button>
          <Button sx={{ ml: 2 }}>
            <img src="assets/svg/te.svg" width={20} />
          </Button>
        </Box>
        </Hidden>
        {/* <Box flexGrow={1}/> */}

        <Hidden mdUp>
        <Button onClick={() => {setOpen(true)}} sx={{ position: "absolute", top: 20, right: 30 }}>
          <Menu/>
        </Button>
        </Hidden>
      </Toolbar>
    </AppBar>
    <Drawer open={open} anchor="right" PaperProps={{sx:{backgroundColor:'#BEECFF'}}} onClose={() => {setOpen(false)}}>
      <Box sx={{width:150,display:'flex',justifyContent:'center'}}  role="presentation">
      <List sx={{mt:6}} >

        <ListItemButton onClick={() => scrollToAboutMe("about")}>
          <ListItemText >About Me</ListItemText>
        </ListItemButton>
        <ListItemButton onClick={() => scrollToAboutMe("wallynomics")}>
          <ListItemText>Wallynomics</ListItemText>
        </ListItemButton>
        <ListItemButton onClick={() => scrollToAboutMe("how_to_buy")}>
          <ListItemText>How to buy</ListItemText>
        </ListItemButton>
      </List>
      </Box>
      <Box >
      <Button>
            <img src="assets/svg/x.svg" width={20} />
          </Button>
          <Button sx={{ ml: 1 }}>
            <img src="assets/svg/te.svg" width={20} />
          </Button>
      </Box>

    </Drawer>
    </>
  );
};

export default Header;
