import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const RowItem = ({ item }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: "10px", height: "100%" ,}} >
        <CardMedia
        sx={{ '&:hover': { cursor: "pointer", transform:"scale(1.1)", transition: "0.5s" }, width: "420px" }}
        component="img"
        height="140"
        image={item.img || item.src}
        alt="Burger"
        />
         <CardContent>
         <Typography variant="h5" component="div">
          {item.title || item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ETA: {item.eta}
        </Typography>
        <Typography variant="h6" color="maroon">
          {item.place}
        </Typography>
        <Typography variant="body2" color="red" fontSize={14} fontWeight={600}>
          {item.offer}
        </Typography>
        <Button variant='outlined' sx={{marginLeft:"-5px", marginTop:"10px", color:"blue"}}>Buy now</Button>
         </CardContent>
    </Card>
  )
}

export default RowItem