import { createTheme } from "@mui/material";

export const theme = createTheme({
    typography:{
        fontFamily:'Bubblegum'
    },
    components:{
        MuiButton:{
            defaultProps: {
                // The props to change the default for.
                disableRipple: true, // No more ripple, on the whole application 💣!
              },
            styleOverrides:{
                root:{
                    background:' url("assets/svg/cloud.svg") center center no-repeat',
                    width:130,
                    height:90,
                    transition: 'transform 0.3s',
                    '&:hover':{
                        background:' url("assets/svg/cloud.svg") center center no-repeat',
                        transform: 'scale(1.2)',
                    }
                }
            }
        }
    },
    
})