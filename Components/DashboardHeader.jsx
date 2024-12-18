import { Grid,TextField,InputAdornment,Box, Typography,Badge } from "@mui/material"
import Search from '../assets/search.svg'
import icon from '../assets/icon.svg';
import Profile from '../assets/Profile.svg'
import More from '../assets/More.svg'

function DashboardHeader(){
    return(
        <Grid container sx = {{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"20px",mb:1,width:"100%",ml:2,flex:1}}> 
            <Grid item xs = {6} sm = {6}>
                <TextField 
                    placeholder="Search"
                    variant="outlined"
                    fullWidth
                    sx= {{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '30px',
                            backgroundColor:"rgba(245, 246, 250, 1)",
                            height:"40px"
                        }
                    }}
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <img src ={Search}/>
                        </InputAdornment>
                        ),
                    }}/>
            </Grid>
            <Grid item xs = {6} sm = {6}>
                <Box sx = {{display:"flex",flexDirection:"row",justifyContent:"flex-end",alignItems:"center", alignContent:"flex-end",}}>
                    <Badge 
                        badgeContent={4}  
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                          }}
                        sx={{
                        '& .MuiBadge-badge': {
                            backgroundColor: "rgba(249, 60, 101, 1)",
                            color: "rgba(255, 255, 255, 1)",
                            transform: "translate(-15px,-10px)"
                        }
                        }}>
                    <Box>
                        <img src = {icon} style = {{width:"30px",height:"30px"}}/>
                    </Box>
                    </Badge>
                    <img src = {Profile} style = {{width:"40px",height:"40px",marginBottom:"7px"}}/>
                    <Box sx = {{display:{xs:"none",md:"block"},paddingRight:"5px"}}>
                        <Typography variant="body2" >Moni R</Typography>
                        <Typography variant="body1" sx ={{padding:0,fontSize:"12px"}}>Admin</Typography>
                    </Box>
                    <img src = {More} style = {{mb:"10px"}}/>
                </Box>
            </Grid>
        </Grid>
    )
}
export default DashboardHeader