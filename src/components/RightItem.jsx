import {  Grid, Typography } from '@mui/material'
import React from 'react'
import { popularrestaurants } from './data'
import RowItem from './RowItem'

const RightItem = () => {
  return (
      <>
     
    <Grid container sx={{ flex: "1", bgcolor:"#fa774f", display:{xs:"none",sm:"block"} }} p={5}>
    <Typography variant='h4' align='center' p={2}>
          Popular Restaurants
      </Typography>
            {popularrestaurants.map(item=>(
                <Grid item key={item} xs={12} gap={10}>
                <RowItem item={item} id={item.id}/>
                </Grid>
            ))}
    </Grid>
    </>
  )
}

export default RightItem