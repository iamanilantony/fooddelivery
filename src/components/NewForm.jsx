import React from 'react';
import { ErrorMessage, Field, Form, Formik, useField, useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, styled } from '@mui/system';
import { Grid, Typography } from '@mui/material';


    //Pincode objects for autocomplete
    const pincode = [
      {
        id:1,
        place:"JP Nagar",
        pincode:"619267"
      },
      {
        id:2,
        place:"Hosur",
        pincode:"315267"
      },
      {
        id:3,
        place:"HSR Layout",
        pincode:"619063"
      }
    ]


    //Validate function to identify the location and assign the pincode
    const validate = ({e,setFieldValue}) => {
          const result = pincode.filter(item => {item.place === e.value
          },
          setFieldValue('pincode',result.pincode)
          )
    }
  

    // Styled Component of MUI
const StyledBox = styled(Box)(() => ({
      display:"flex",
      flexDirection: "column",
      fontSize: "22px",
      alignItems: "center",
      marginBottom: "45px",
      width: "100%",
      justifyContent:"space-between"
}))

const Details = () => {     
  
  <div>
<Formik
// YUP validation is applied, Yup is a JavaScript schema builder for value parsing and validation
validationSchema={Yup.object({
  firstName: Yup.string()
  .max(15, 'Must be 15 characters or less')
  .required('Name is Required'),
  lastName: Yup.string()
  .max(20, 'Must be 20 characters or less')
  .required('Last name Required'),
  email: Yup.string().email('Invalid email address').required('Email Required'),
  place: Yup.string()
  .required('Place is Required'),
  job: Yup.string()
  .oneOf(['designer','development','product','other'],'Invalid job type')
  .required('Email Required'),
})}

onSubmit = {(values, {setSubmitting}) => {
  alert(JSON.stringify(values, null, 2));
  setSubmitting(false);}} >


  {({values, dirty, setFieldValue}) => {
      return (

      <Box>
      {/*......... Data inside formik ..........*/}


          <Typography variant='h4' align='center' mt={"-60px"} mb={10}>Sign Up</Typography>
          <Form>

            {/* ............Formik Form starts......... */}

            {/* .........First Name Input.......... */}
            <StyledBox>
              <label htmlFor="firstName" style={{ display: "flex", marginBottom: "5px" }}>First Name:</label>
              <Field name="firstName" type="text" style={{ height: "40px" }} />
              <ErrorMessage style={{ display: "flex", marginBottom: "5px" }} name="firstName" />
            </StyledBox>


            {/* .........Last Name Input.......... */}
            <StyledBox>
              <label htmlFor="lastName" style={{ display: "flex", marginBottom: "5px" }}>Last Name:</label>
              <Field name="lastName" type="text" style={{ height: "40px" }} />
              <ErrorMessage name="lastName" />
            </StyledBox>

            {/* .........Email Input.......... */}
            <StyledBox>
              <label htmlFor="email" style={{ display: "flex", marginBottom: "5px" }}>Email Address:</label>
              <Field name="email" type="email" style={{ height: "40px" }} />
              <ErrorMessage name="email" />
            </StyledBox>

            {/* .........Place Input.......... */}
            <StyledBox>
              <label htmlFor="place" style={{ display: "flex", marginBottom: "5px" }}>Enter you Place:</label>

              <Field
                name="place"
                type="text"
                style={{ height: "40px" }}
                onChange={(e) => {
                  setFieldValue('pincode', 'helloworld');
                }}
                />

              <ErrorMessage name="place" />
            </StyledBox>

            {/* .........Pincode Input.......... */}
            <StyledBox>
              <label htmlFor="pincode" style={{ display: "flex", marginBottom: "5px" }}>Pincode:</label>
              <Field name="pincode" type="" style={{ height: "40px" }} />
            </StyledBox>

            <button type="submit" style={{ backgroundColor: "darkorange", border: "none", padding: "10px", fontSize: "18px", marginLeft: "120px" }}>Submit</button>

          </Form> 

      </Box>
)}

}
</Formik>
</div>

};

    
      
export default Details








































































































































































































































































        