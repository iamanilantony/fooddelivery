import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import { Colors } from "../styles/theme/index";

const RowItem = ({ item }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 3, height: "100%" , bgcolor:"#f7eaea", borderRadius:"20px"}} >
        <CardMedia
        sx={{ '&:hover': { cursor: "pointer", transform:"scale(1.1)", transition: "0.5s" }, width: "420px" }}
        component="img"
        height="140"
        image={item.img || item.src}
        alt="Burger"
        />
         <CardContent>
         <Typography variant="h5" component="div" fontWeight={500}>
          {item.title || item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ETA: {item.eta}
        </Typography>
        <Typography variant="h6" sx={{color:Colors.danger}}>
          {item.place}
        </Typography>
        <Typography variant="body2" sx={{color:Colors.warning}} fontSize={14} fontWeight={600}>
          {item.offer}
        </Typography>
        <Link to={`/product/${item.id}`} style={{textDecoration: "none", color:"red"}}>
        <Button variant='outlined' sx={{marginLeft:"-5px", marginTop:"10px"}}>Buy now</Button>
        </Link>
         </CardContent>
    </Card>
  )
}

export default RowItem