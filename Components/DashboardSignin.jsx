import { Grid, Box, TextField, Typography, Button } from "@mui/material";
import bgimage from "../assets/Frame.svg";
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DashboardSignin() {
  const [icon,setIcon] = useState(false)

  function onclickIconChange(){
    setIcon(i => !i)

  }
  const navigate = useNavigate();  // Get the navigate function

  const goToSignup = () => {
    navigate('dashboard-signup');  // Navigate to the signup page
  };

  return (

    <Grid
      container
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height:"100vh"
      }}
      alignItems="center"
      justifyContent="center"
    >
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: 2,
          padding: 4,
          boxShadow: 3,
          margin:"0px 10px 0px 10px",
          minBlockSize:"fit-content"
        }}
      >
        <Typography variant="h6" sx={{ fontSize: "16px", fontWeight: "bold", mb: 1,textAlign:"center" }}>
          Login to Account
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: "12px", color: "rgba(32, 34, 36, 1)", mb: 3,textAlign:"center" }}
        >
          Please enter your email and password to continue
        </Typography>

        <Box sx={{ width: "100%", mb: 2 }}>
          <Typography variant="body2" sx={{ fontSize: "12px", color: "rgba(32, 34, 36, 1)", mb: 1 }}>
            Email Address
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="esteban_schiller@gmail.com"
            type="email"
            size="small"
          />
        </Box>

        <Box sx={{ width: "100%", mb: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 1,
            }}
          >
            <Typography variant="body2" sx={{ fontSize: "12px", color: "rgba(32, 34, 36, 1)" }}>
              Password
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "12px",
                color: "rgba(32, 34, 36, 1)",
                cursor: "pointer",
              }}
            >
              Forgot Password?
            </Typography>
          </Box>
          <TextField fullWidth variant="outlined" type={icon?"text":"password"}  size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                 <Button
                  onClick={onclickIconChange}
                  sx={{
                    width: "fit-content",     
                    height: "fit-content", 
                    minWidth: 0,
                    padding: 0,
                    color:"rgba(32, 34, 36, 1)",
                    display: "flex",
                    alignItems:"center",
                    justifyContent:"end",
                  }}
                >
                  {icon? (
                    <VisibilityIcon fontSize="small" />
                  ) : (
                    <VisibilityOffIcon fontSize="small" />
                  )}
                </Button>
              </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box sx={{ display: "flex",justifyContent:"flex-start",alignItems:"start", mb: 2 }}>
          <input type="checkbox" id="rememberMe" />
          <label htmlFor="rememberMe" style={{ marginLeft: "8px", fontSize: "12px",fontFamily:"sans-serif" }}>
          Remember Password
          </label>
        </Box>

        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "rgba(71, 0, 36, 1)",
            color: "rgba(255, 255, 255, 1)",
            borderRadius:"5px",
            fontSize:"10px"
          }}
          onClick={() => {navigate('dashboard')}}
        >
          Sign In
        </Button>
        <Typography variant="body2" sx={{ fontSize: "12px", color: "rgba(32, 34, 36, 1)", mt: 3 }}>
            Don't have an account?<span onClick={goToSignup} style ={{color:"rgba(117, 47, 82, 1)",textDecoration:"underline",fontWeight:"bold"}}>Create Account</span>
          </Typography>
      </Grid>
    </Grid>
  );
}

export default DashboardSignin