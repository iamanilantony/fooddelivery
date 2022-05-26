import React from 'react';
import { Formik, Field, Form, useField, useFormikContext } from 'formik';
import "./details.css";
const pincode = [
    {
      id:1,
      place:"Kormangala",
      pincode:"695033"
    },
    {
      id:2,
      place:"JP Nagar",
      pincode:"567834"
    },
    {
      id:3,
      place:"Shivaji Nagar",
      pincode:"697845"
    }
  ]

  

const Details =() => {
  const initialValues = { firstName: '', lastName: '', fullName: '' , place:'', pincodes:''};
  

  const handleName = (event,values,handleChange) => {
    let {name, value} = event.currentTarget;
    values.fullName = values.firstName + values.lastName
    handleChange(event)}

  const handleNumber = (event,values,handleChange) => {
    let {name, value} = event.currentTarget;
    let pin = 
    (
      pincode.map((item)=>(
        values.place === item.place ? item.pincode : null
        ))
        )
      { console.log(pin)}
    values.pincodes = pin
    handleChange(event)

  }
  return (
    <div className="Details">
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => alert(JSON.stringify(values, null, 2))}
      >
        {({ values, handleChange}) => (

          <div className="section" >
          <div>
          <h1>User registration form</h1>
          <p style={{ color: '#555' }}>
            Enter your details
          </p>
          </div>
          <Form className='details_form'>
              <div className="formcontrol">
                <label>First Name</label>
                <Field
                  name="firstName"
                  onChange={(e) => { handleName(e, values, handleChange) }}
                />
              </div>
              <div className="formcontrol">
                <label>
                  Last Name
                </label>
                <Field name="lastName" onChange={(e) => { handleName(e, values, handleChange) }}/>
              </div>
              <div className="formcontrol">
                <label>
                  Full Name
                </label>
                <Field name="fullName" />
              </div>
              <div className="formcontrol">
                <label>
                  Location
                </label>
                <Field name="place" onChange={(e) => { handleNumber(e, values, handleChange) }}/>
              </div>
              <div className="formcontrol">
                <label>
                  Pincode
                </label>
                <Field name="pincodes" />
              </div>
              
              <button type="submit">Submit</button>
            </Form>
          </div>
      )}
      </Formik>
    
    </div>
  );
}
export default Details
