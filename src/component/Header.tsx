import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
    
  return (
    <AppBar position='absolute' sx={{backgroundColor:"transparent",top:20,px:{md:30,sm:5},boxShadow:'none' }}>
        <Toolbar>
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