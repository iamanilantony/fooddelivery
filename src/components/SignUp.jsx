import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useFormik } from 'formik'
import * as yup from 'yup'; 
import React from 'react'
import { Link } from 'react-router-dom';

const validationSchema = yup.object({
    firstName: yup
        .string("Enter your first name")
        // .firstName("Enter your first name")
        .required("First name required"),
    lastName: yup
        .string("Enter your last name")
        // .lastName("Enter your last name")
        .required("Last name is required"),
    email: yup 
        .string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),
    password: yup 
        .string("Enter your password")
        // .password("Enter a valid password")
        .required("Password is required"),
    confirmPassword: yup 
        .string("Confirm your password")
        .test('passwords-match',"password does not match", function(value){
            return this.parent.password === value
        } )
        .required("Password is required")     

});

const SignUp = () => {
    const formik = useFormik({
        initialValues:{
            firstName: '',
            lastName: '',
            email:'',
            password:'',
            confirmPassword:'',
        },
        validationSchema: validationSchema,
        onSubmit: (values)=> {
            alert(JSON.stringify(values,null,2))
        },
    })
  return (
    <div>
        <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            width={"98vw"}
            height={"90vh"}
            mt={"-234px"}
            mb={"-100px"}>
         <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            padding={"30px"}
            sx={{width:{xs:"65%",sm:"33%"}}}
            // width={"50%"}
            height={"70vh"}
            bgcolor={"pink"}
            borderRadius={"10px"}
            >

                <Typography variant="h4" sx={{mb:"25px"}}>
                    Sign Up
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        fullWidth
                        sx={{mb:"25px"}}
                        id='firstName'
                        name='firstName'
                        label='First Name'
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                        helperText={formik.touched.firstName && formik.errors.firstName}
                        />

                        <TextField
                            fullWidth
                            sx={{mb:"25px"}}
                            id='lastName'
                            name='lastName'
                            label='Last Name'
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                            helperText={formik.touched.lastName && formik.errors.lastName}
                            />

                         <TextField
                            fullWidth
                            sx={{mb:"25px"}}
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
                            sx={{mb:"25px"}}
                            id='password'
                            name='password'
                            label='Password'
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                            />

                         <TextField
                            fullWidth
                            sx={{mb:"25px"}}
                            id='confirmPassword'
                            name='confirmPassword'
                            label='confirm password'
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                            />

                            <Button type="submit" color="primary" variant="contained" fullWidth>Submit</Button>
                            
                            <Link to='/fullform' style={{textDecoration: "none" , color:"black"}}>
                            <Typography variant="body1" sx={{mb:"5px" , mt:"15px"}} >
                                    Register Form
                           </Typography>
                            </Link>

                </form>
                            </Box>
            </Box>
    </div>
  )
}

export default SignUp