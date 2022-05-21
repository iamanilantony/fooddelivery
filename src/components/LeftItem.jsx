import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import RowItem from './RowItem'
import { popularproducts } from './data'

const LeftItem = () => {
  return (
    <Box sx={{ flex: "5", bgcolor:"pink",}} p={10}>
        <Typography variant='h3' align='center' mb={5} fontWeight={500}>
          Popular Choices
      </Typography>
        <Grid container spacing={4}>
        {popularproducts.map(item=>(
            <Grid item>
             <RowItem item={item} id={item.id}/>
             </Grid>
        ))}
        </Grid>
        
    </Box>
  )
}

export default LeftItem