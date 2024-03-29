import { BannerContainer, BannerImg, BannerTitle   , BannerDescription , BannerItem, BannerShopButton } from '../styles/Headerstyle'
import React from 'react'
import { useTheme } from "@mui/system";
import { useMediaQuery } from '@material-ui/core';



export default function Header() {
    const theme = useTheme();
    // const matches  = useMediaQuery(theme.breakpoints.down("md"));
  return (  
      <BannerContainer sx={{marginTop:{xs:"-240px",sm:"-240px"}}}>
          <BannerImg src="https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <BannerItem sx={{ top: {xs:"22%",sm:"28%"},    left: {xs:"1%",sm:"20%"} }}>
              <BannerTitle sx={{ fontSize: {xs: "32px",sm: "32px", md:"42px"}, color: {xs:"#ffs5722",sm:"#FF5722"}, }}>
                  Get Huge Discounts on Pizzas and Burgers from Dominos
              </BannerTitle>
              <BannerDescription sx={{ fontSize: {xs: "14px", sm:"22px"} }}>
                  Now avail upto 50% off on all pizzas and Burgers listed by Dominos with offers going upto 70% off Offers only applies to orders abover Rs350
              </BannerDescription>
              <BannerShopButton>
              Buy Now
              </BannerShopButton>
          </BannerItem>
      </BannerContainer>
        
  )
}

// export default Header