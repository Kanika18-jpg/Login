import React, {useState, useEffect} from 'react';
import {Box , TextField,Typography,Button} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { Alert , AlertTitle} from '@material-ui/lab';
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";


const useStyles = makeStyles({
    Box: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '200px',
        
    
    },
    Typography: {
        fontFamily: ['Roboto', 'sans-serif'].join(','),
        color: '#1A0DAB',
        fontWeight: 'bold',
       
       },
    
    TextField: {
      width: '30%',
      boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
      backgroundColor: "#fafafa",
      display: "flex",
    },
    Button: {
        marginTop: "10px",
        marginBottom: "3px",
        paddingLeft: "2px",
        paddingRight: "2px",
        width:'150px',
       
    },
   
  });

const UserLog = () => {

    const navigate = useNavigate();
    const classes = useStyles();

    const initialValues = {  email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
      
    };
  

    useEffect(() => {
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
      }
    });
    const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      //const someString = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d{4})(?=.*[@$!%*?&])[A-Za-z\d{4}@$!%*?&]{8,10}$";
      
  
     
      if (!values.email) {
        errors.email = "Email is required!";
      } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
      }
      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length <8) {
        errors.password = "Password must be more than 8 characters and have more than 4 numbers.";
      } 
      return errors;
    };


    axios.post('http://analyticsv.pythonanywhere.com/',formValues)
    .then(res =>{
        console.log(res);
    })
    .catch(err =>{
        console.log(err);
    })

  return (
    <>
          {Object.keys(formErrors).length === 0 && isSubmit ? (
            navigate('/dashboard')
 
      ) : <Alert severity="info">
  <AlertTitle>Info</AlertTitle>
   <strong>Fill the following fields to login</strong>
</Alert>}

        <Box component='form' className={classes.Box} onSubmit={handleSubmit} >
        
        
        <Typography variant='h4' className={classes.Typography}>Login</Typography>
        <hr
        style={{
        
          color: 'gray',
          boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
          width:'30%',
        }}
      />
         <TextField id="outlined-basic1" label="Email" variant="outlined" margin="normal"  className={classes.TextField}   name="email"
          value={formValues.email}  autoComplete="off" 
              onChange={handleChange}/>
                <p style={{
                    color:"#EB5757", 
                    fonttyle: 'italic',
                    fontWeight: '700',
                    fontSize: '14px',
                    lineHeight: '21px',
                }}>{formErrors.email}</p>
         
        <TextField id="outlined-basic" label="Password" variant="outlined" type="password" margin="normal" className={classes.TextField}
           name="password" value={formValues.password}
              onChange={handleChange}
       />
          <p style={{
                    color:"#EB5757", 
                    fonttyle: 'italic',
                    fontWeight: '700',
                    fontSize: '14px',
                    lineHeight: '21px',
                }}>{formErrors.password}</p>
        

       

      


        <Button variant="contained" type="submit" color="primary" className={classes.Button}   >Login</Button>
        </Box>
        
        
    </>
    
  )
}

export default UserLog