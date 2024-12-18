import { Grid,Typography,Box } from "@mui/material"
import Menu from "../assets/Menu.svg"
import List from "../assets/List.svg"
import Cardboard from "../assets/cardboard.svg"
import  History  from "../assets/history.svg"
import Plans from "../assets/plans.svg"
import CustomerInfo from "../assets/Customer Info.svg"
import Settings from "../assets/Settings.svg"
import Logout from "../assets/Logout.svg"
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import DashboardMain from "./DashboardMain"
import { useNavigate } from "react-router-dom"
import { useState } from "react"



function SideNavList(){
    const [bgColor,setBgColor] = useState("white")
    const [color,setColor] = useState("black")
    const navigate = useNavigate()
    const style = {
        backgroundColor:bgColor,
        color:color,
        cursor: 'pointer',
        marginRight:"20px"
    }


    
    return(
        <Grid container sx={{ display: 'flex', flexDirection: 'column',justifyContent:"space-between",width:"200px",height:"100vh",marginTop:"20px"}}>
                <Box>
                    <Typography variant = "body1" onClick = {() =>(navigate("dashboard-main"), setBgColor("rgba(71, 0, 36, 1)"),setColor("white"))} sx = {style} >
                        <AccessTimeOutlinedIcon sx ={{width:"20px",marginRight:"20px"}}/>
                        Dashboard
                    </Typography>
                    <Typography variant = "body1">
                        <img src = {Menu}/>
                        Menu items
                    </Typography>
                    <Typography variant = "body1">
                        <img src = {List}/>
                        Today's orders
                    </Typography>
                    <Typography variant = "body1">
                        <img src = {Cardboard}/> 
                        Live tracking
                    </Typography>
                    <Typography variant = "body1">
                        <img src = {History}/>
                        Order history
                    </Typography>
                    <Typography variant = "body1">
                        <img src = {Plans}/>
                        Plans
                    </Typography>
                    <Typography variant = "body1">
                        <img src = {CustomerInfo}/>
                        Customer details
                    </Typography>
                    <Typography variant = "body1">
                        <PeopleOutlineOutlinedIcon sx ={{marginRight:"20px",width:"20px"}}/>
                        Users
                    </Typography>
                </Box>
                <Box sx={{ borderTop: "1px solid #ccc", paddingTop: "10px" }}>
                    <Typography variant="body1" sx={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
                    <img src={Settings}/>
                    Settings
                    </Typography>
                    <Typography variant="body1" sx={{ display: "flex", alignItems: "center" }}>
                    <img src={Logout}/>
                    Logout
                    </Typography>
                </Box>
        </Grid>
            
    )
}
export default SideNavList