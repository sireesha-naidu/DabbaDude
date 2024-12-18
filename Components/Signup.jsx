import React from 'react';
import food from '../assets/Food.svg';
import { Grid, Typography, TextField, Button, Box } from '@mui/material';
import { useState } from 'react';
import apple from '../assets/apple.svg'
import google from '../assets/Google.svg'
import facebook from '../assets/facebook.svg'
function Signup() {
  const [color,setColor] = useState(
    {bgColor:"rgba(245, 245, 255, 1)",
    textColor:"rgba(85, 84, 84, 1)"})

  function buttonColorChange(){
    setColor(c =>({bgColor:"rgba(172, 89, 255, 1)",textColor:"rgba(255, 255, 255, 1)"}))
  }


  return (
    <Grid container sx={{ margin: 0, padding: 0 }}>
        <Grid item xs={12} sm ={12} md={6} lg = {6} xl={6} sx={{ padding: 0, margin: 0 }}>
            <img src={food} alt="Food" style={{ width: '100%', height: '100%',borderRadius:"5px 5px 0px 0px"  }} />
        </Grid>
      <Grid item xs={12} sm ={12} md={6} lg = {6} xl={6} sx={{display: 'flex', flexDirection: 'column',alignItems: 'flex-start',padding: '20px',height: '100vh',}}>
        <Box sx={{ width: '100%', maxWidth: '400px' }}>
            <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 'bold', mb: 1 }}>
            Let’s sign you in
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, color: 'gray' }}>
            Hello user, have a yummylicious journey!
            </Typography>

            <TextField id ="userInput" fullWidth placeholder="Phone Number" variant="outlined" sx={{ mb: 2,mt:3 }} onChange={buttonColorChange}/>

            <Button fullWidth variant="contained" sx={{
                backgroundColor: color.bgColor,
                color: color.textColor,
                mb: 2,
                fontSize: '12px',
                borderRadius: '4px',
                padding: '24px 16px',
            }}>
                Get OTP
            </Button>
            <Box id = "hrLine" style={{display: "flex",alignItems: "center", justifyContent: "center", gap: "10px",margin:"20px"}}>
              <hr style={{width: "50%", border: "1px solid #ccc", margin: 0,color:"rgba(142, 131, 131, 1)"}} />
              <span style = {{fontFamily:"sans-serif",color:"rgba(85, 84, 84, 1)"}}>or</span>
              <hr style={{width: "50%", border: "1px solid #ccc", margin: 0,color:"rgba(142, 131, 131, 1)"}} />
            </Box>

            <Box id = "logoSection" style={{display: "flex",flexDirection:"row",alignItems: "center", justifyContent:"center", gap: "50px",mt:7}}>
              <img src = {google}></img>
              <img src = {facebook}></img>
              <img src = {apple}></img>

            </Box>

            <Box sx={{ textAlign: 'center', mt: 4}}>
                <Typography variant="body2">
                    Have an account?{' '}
                    <span style={{
                        color: 'rgba(31, 31, 31, 1)',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                    }}>
                        Login Now
                    </span>
                </Typography>
            </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Signup;