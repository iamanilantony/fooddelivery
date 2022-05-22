import { Box, Typography } from '@mui/material'
import React from 'react'
import { Colors } from "../styles/theme/index";

const Footer = () => {
  return (
    <Box bgcolor={Colors.danger} height={"100px"} mt={10}>
        <Typography variant='h5' align='center' pt={5} color={Colors.white}>
            Thank You for Visiting Yummy.
        </Typography>
    </Box>
  )
}

export default Footer