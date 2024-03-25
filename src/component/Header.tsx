import { AppBar, Box, Button, Toolbar } from '@mui/material'

type Props = {}

const Header = (_props: Props) => {
    
  return (
    <AppBar position='absolute' sx={{backgroundColor:"transparent",top:20,px:{md:30,sm:5},boxShadow:'none' }}>
        <Toolbar>
           <img src='assets/logo.png' width={"20%"}/>
           <Box flexGrow={1}/>
           <Button>
            <img src='assets/svg/x.svg'/>
           </Button>
           <Button sx={{ml:4}}>
            <img src='assets/svg/te.svg'/>
           </Button>
        </Toolbar>
    </AppBar>
  )
}

export default Header