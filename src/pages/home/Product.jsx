import { Box, Button, Card, CardMedia,Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { popularproducts } from '../../components/data'
import { Navbar } from '../../components'
import { Star } from '@material-ui/icons'
import { styled } from '@mui/system'
import Footer from '../../components/Footer'
import { Cart } from '../../Context'

export const styledlist = styled(Box)

const Product = () => {
    const [item,SetItem] = useState(popularproducts)
    const {id} = useParams();
     const {cart,setCart} = useContext(Cart);

    useEffect(() => {
      let item = popularproducts.find(item=>item.id===parseInt(id))
      if(item){  
          SetItem(item);
      } 

    }, [])
    
  return (
        <Box>
            <Navbar />
                <Box mt={"-200px"} p={2}>
                    <Typography variant='h3' fontWeight={500}>
                        {item.place}
                    </Typography>
                    <Typography variant='h6' fontWeight={400}>
                    {item.desc}
                    </Typography>
                    <Typography variant='body1' fontWeight={400}>
                    {item.address}
                    </Typography>
                    <Box bgcolor={"green"} color={'white'} width={"50px"} display={"flex"} alignItems={"center"} p={1}>
                    <Typography variant='h6' fontWeight={400} mr={1} fontSize={"16px"}>
                    4.2
                    </Typography> <Star />
                    </Box>
                </Box> 
                
            <Box sx={{bgcolor: "pink", display:"flex", justifyContent:"space-between", flexDirection:{xs:'column', sm:'row'}  }}>
               <Card m={4} sx={{width:{xs:"100%",sm:"60%"}, flex:'3'}} >
                   <CardMedia
                     component="img"
                     height="594"
                     objectfit="contain"               
                     image={item.img}
                     alt="foodImage"
                     sx={{marginLeft: "20px"}}
                     />
               </Card>
                    <Box  flex={1} display="flex" flexDirection="column" alignItems={{xs:"left",sm:"left"}}   paddingRight="5%" paddingLeft={{xs:"10%",sm:"1%"}} marginRight={10}  Width={"100%"}>
                        <Typography variant='h3' fontWeight={500} p={1}> 
                            {item.title} 
                        </Typography>
                        <Typography variant='h6' fontWeight={200} p={1}> 
                            {item.desciption} 
                        </Typography>
                        <Box display={"flex"} alignItems={"center"} color={"gold"} bgcolor={"#ff050586"} width={"180px"} borderRadius={"5px"} p={0.2} >
                        <Star /><Star /><Star /><Star /><Star />
                        <Typography variant='h6' fontWeight={400} pl={0.5} color={"gray"}> 
                           20
                        </Typography>
                        </Box>
                         {cart.includes(item)?(
                            <Button 
                            onClick={()=>{
                               setCart(cart.filter((c)=>c.id!==item.id));
                            }} 
                            variant='contained' 
                            sx={{ marginTop: "10px" }}
                            >
                            Remove Item
                            </Button>
                            ):  
                          (     
                                <Button
                                 onClick={()=>{
                                 setCart([...cart,item]);
                              }} 
                             variant='contained' 
                             sx={{ marginTop: "10px" }}>
                             Add Item {item.price}
                             </Button>
                              )} 
                        <Button variant='outlined' sx={{ marginTop: "10px" }}>
                            Add to favourite
                        </Button>
                         

                    </Box>
              </Box>
              <Footer />
        </Box>
  )
}

export default Product