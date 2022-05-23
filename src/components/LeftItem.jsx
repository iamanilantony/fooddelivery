import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import RowItem from './RowItem'
import { popularproducts } from './data'

// const I = [11,12,13,14,15,16,17,18,19];
const LeftItem = () => {
  return (
    <Box sx={{ flex: "5", bgcolor:"#ffffff", width:{xs:"100px",sm:"1200px"},padding:{xs:0,sm:10}}}>
        <Typography variant='h4' align='center' mb={5} fontWeight={500} mt={5}>
          Popular Choices
      </Typography>
        <Grid container spacing={4}>
        {popularproducts.map(item=>(
            <Grid item key={item}>
             <RowItem item={item} key={item.id}/>
             </Grid>
        ))}
        </Grid>
        
    </Box>
  )
}

export default LeftItem