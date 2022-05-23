import {  styled } from '@mui/system';
import { Colors } from './theme';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Button, Typography } from '@mui/material';
const theme = createTheme();

export const BannerContainer = styled(Box)(({ matches, theme }) => ({
    display: 'flex', 
    marginTop: '240px',
    width: "100%",
    position: 'relative',
    background: Colors.black,
}))

export const BannerImg = styled("img")(( src, theme)=> ({
    width: "100%",
    height: "50vh",
    objectFit: "cover",
  
}))

export const BannerItem = styled(Box)(()=>({
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
    top: "28%",
    left: "20%",
}))


export const BannerTitle = styled(Typography)((theme)=>({
    fontSize: "50px",
    maxWidth: "840px",
    fontWeight: "600",
    textAlign:"center",
    color: Colors.danger,
    // [theme.breakpoints.up("md")]: {
    //         fontSize: "50px",
    //       },
    // [theme.breakpoints.down("sm")]: {
    //         fontSize: "50px",
    //       },

}))

export const BannerDescription = styled(Typography)((theme)=>({
    fontSize: "24px",
    maxWidth: "1040px",
    fontWeight: "600",
    textAlign:"center",
    color: Colors.inverse,
}))
export const BannerShopButton = styled(Button)(()=>({
    background: Colors.imgcolor, color: 'white', padding: '15px' , marginTop: '20px',
}))