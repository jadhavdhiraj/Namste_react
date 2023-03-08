import {useFormik} from "formik"
import React from "react";

const Login = () => {
    const formik = useFormik({
        initialValues: {
          email: '',
          firstName:"",
          lastName:""
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
    return(
        <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">FirstName</label>
        <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
        />
        <label htmlFor="lastName">LastName</label>  
        <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
        /> 
        <label htmlFor="email">Email Address</label>
        
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
  
        <button type="submit">Submit</button>
      </form>
    );
};

export default Login;