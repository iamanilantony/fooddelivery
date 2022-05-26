import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as yup from 'yup'

const pincode = [
  {
    id:1,
    place:"ABC",
    pincode:"123"
  },
  {
    id:2,
    place:"ABCd",
    pincode:"124"
  },
  {
    id:3,
    place:"ABCe",
    pincode:"1235"
  }
]



const validationSchema = yup.object({
  firstName: yup
  .string("Enter your first name")
  .required("First name required"),
  number: yup
  .string("Enter your number")
  .required()
  .matches(/^[0-9]+$/, "Must be only digits")
  .min(10, 'Must be exactly 10 digits')
  .max(10, 'Must be exactly 10 digits'),
  email: yup 
  .string("Enter your email")
  .email("Enter a valid email")
  .required("Email is required"),
  dob: yup
  .date("Enter your Date of birth")
      .required("Date of birth required") ,   
      place: yup 
      .string("Enter your place")
      .required("Place is required"),
      // pincode: yup 
      //     .string("Enter your number")
      //     .required()
      //     .matches(/^[0-9]+$/, "Must be only digits")
      //     .min(6, 'Must be exactly 6 digits')
      //     .max(6, 'Must be exactly 6 digits')
      //     .required("Password is required")     
      
    });

    
    const FullForm = () => {
      
      const [pincodes,setPincode]= useState("123456");
      
      // const validate = () => {
      //       setPincode("1123")
      //       console.log(pincodes)
      //       formik.values.pincode= pincodes
      // }
      
  const formik = useFormik({
    initialValues:{
      firstName: '',
      number:'',
      place:'',
      dob:'',
      email:'',
      pincode:''
    },
    validationSchema: validationSchema,
    onChanged: (values)=> {
      if (formik.values.place!=null)
      {
        setPincode("345678")
      }
    },
    onSubmit: (values)=> {
      formik.setFieldValue(
        'pincode', pincodes
        
        )
      setTimeout(() => {
        alert(JSON.stringify(values,null,2))
        
      }, 1000);

      
  },

  })

  return (
    <div>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ backgroundColor: "#eae8ff" }}
        width={"98vw"}
        height={"90vh"}
        pt={10}
        pb={10}
       
      >
      <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      borderRadius={3}
      sx={{ backgroundColor: "white", width:{xs:"65%",sm:"35%"}}}
      m={10}
      p={8}
      height={"90vh"}
    >
      <Typography variant="h4" sx={{mb:"30px"}}>Register Form</Typography>
      <form onSubmit={formik.handleSubmit}>

            <TextField
              fullWidth
              sx={{ mb: "22px"}}
              name='firstName'
              id='firstName'
              label='Full Name'
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={formik.touched.firstName && Boolean(formik.errors.firstName)}
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
            <TextField
              fullWidth
              sx={{ mb: "25px" }}
              id='number'
              name='number'
              label='Mobile number'
              value={formik.values.number}
              onChange={formik.handleChange}
              error={formik.touched.number && Boolean(formik.errors.number)}
              helperText={formik.touched.number && formik.errors.number}
            />

            <TextField
              fullWidth
              sx={{ mb: "25px" }}
              id='email'
              name='email'
              label='Email'
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
              <TextField
              fullWidth
              sx={{ mb: "25px" }}
              id='dob'
              name='dob'
              label='Date of Birth (MM/DD/YYYY)'
              value={formik.values.dob}
              onChange={formik.onChanged}
              error={formik.touched.dob && Boolean(formik.errors.dob)}
              helperText={formik.touched.dob && formik.errors.dob}
            />

            <TextField
              fullWidth
              sx={{ mb: "22px" }}
              name='place'
              id='place'
              label='Enter your place'
              value={formik.values.place}
              onChange={formik.handleChange} 
            
              error={formik.touched.place && Boolean(formik.errors.place)}
              helperText={formik.touched.place && formik.errors.place}
            />
              <TextField
              fullWidth
              sx={{ mb: "22px" }}
              name='pincode'
              id='pincode'
              label='Pincode'
              value={formik.values.pincode}
              onChange={formik.handleChange}
              // onChange={formik.validate}
              // error={formik.touched.pincode && Boolean(formik.errors.pincode)}
              // helperText={formik.touched.pincode && formik.errors.pincode}
            />
             <Button type="submit" color="secondary" variant="contained" fullWidth>Submit</Button>

      </form>
      </Box>
    
    </Box>
    </div>
  )
}

export default FullForm