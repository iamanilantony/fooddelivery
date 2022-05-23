import { Button, TextField, Typography } from '@mui/material'
import { Box, styled } from '@mui/system'
import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup';
import { Link } from 'react-router-dom';


const validationSchema = yup.object({
    email: yup
        .string("Enter your email")
        .email('Enter a valid email')
        .required('Email is required'),
     password:yup
        .string('Enter your password')
        .min(8,'password should be of minimum 8 characters length')
        .required('password is required'),   
});

const SignIn = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values,null,2));
        },
    });
  return (
      <div>
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ backgroundColor: "white" }}
      width={"98vw"}
      height={"90vh"}
      mt={"-234px"}
      mb={"-100px"}
    >
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ backgroundColor: "white", width:{xs:"65%",sm:"35%"}}}

    //   width={"98vw"}
      height={"40vh"}
    //   mt={"-234px"}
    //   mb={"-100px"}
    >
        
             <Typography variant="h3" p={2} mb={4}>
               Sign In
             </Typography>

          <form onSubmit={formik.handleSubmit}>
             
             <TextField
                fullWidth
                sx={{ marginBottom:"24px" }}
                id="email"
                name='email'
                label='Email'
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    fullWidth
                    sx={{ marginBottom:"24px" }}
                    id='password'
                    name='password'
                    label='Password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    />
                    <Button color="primary" variant="contained" fullWidth type="submit">
                        Submit
                    </Button>
          </form>
            <Link to='/signup' >
             <Typography variant="h6" p={2} mb={4} color={"darkred"}>
               Not a user? Sign In
             </Typography>
            </Link>
             </Box>
             </Box>
                
{/* 
        backgroundColor={"#faeae0"}
        color={"black"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        // justifyContent={"center"}
        p={4}
        width={"300px"}
        borderRadius={"20px"}
      >
        <Box mb={3}>

        <FormControl varient={"filled"} width={"250px"}>
          <InputLabel htmlFor="my-input" mb={2}>Name</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
        </Box>
        <Box mb={3}>
        <FormControl>
        <InputLabel htmlFor="my-input">Email</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
        </Box>
        <Box mb={3}>
        <FormControl>
        <InputLabel htmlFor="my-input">Password</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
        </Box>
        <Box mb={3}>
        <FormControl>
        <InputLabel htmlFor="my-input">Confirm Password</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
        </Box>
        <FormHelperText id="my-helper-text">
            We'll never share your Details.
          </FormHelperText> 
            
    </Box>
      </Box> */}
            </div>
        )}
 

export default SignIn