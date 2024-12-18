import { Grid,Box,Typography, TextField, Grid2 } from "@mui/material";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Calender from '../assets/Calendar.svg'
import Dropdown from '../assets/Dropdown.svg'
import TotalUserCard from "./DashboardCard/TotalUserCard";
import TotalOrderCard from "./DashboardCard/TotalOrderCard";
import TotalEarningsCard from "./DashboardCard/TotalEarningsCard";
import CustomersCard from "./DashboardCard/CustomersCard";
import OrderAnalytics from "./DashboardCard/OrderAnalytics";
import EarningItem from "./DashboardCard/EarningItem";
import OrderDetails from "./DashboardCard/OrderDetails";
import DatePickerItem from "./DashboardCard/DatePicker";

function DashboardMain(){
    const [showDate,setShowDate] = useState(false)

    const handleShowDate = () =>{
        setShowDate(s => !s)
    }
    return(
        <Grid sx = {{backgroundColor:"rgba(241, 244, 249, 1)",height:"100%",width:"100%",padding:"20px",flex:1}}>
            <Grid sx = {{
                display:"flex",
                flexDirection:"row",
                justifyContent:"space-between",}}>
                <Box>
                    <Typography 
                        variant="h6"
                        sx = {{fontWeight:"bold"}}>
                            Dashboard
                    </Typography>
                </Box>
                <Box display="flex" flexDirection="column" sx ={{
                            width:"170px",
                            height:"50px",
                            backgroundColor:"rgba(255, 255, 255, 1)",
                            borderRadius:"5px",
                            alignItems:"center",
                            paddingLeft:"5px",}}>
                    <Box display="flex" alignItems="start" flexDirection="row" 
                        >
                        <img src = {Calender} style = {{height:"30px",width:"30px",mr:0}}  onClick = {handleShowDate}/>
                        <Typography variant="h6" sx = {{fontSize:"12px",ml:0}}>
                            Filter Period
                        </Typography>

                        <Box sx = {{fontSize:"5px",ml:1.5}}>
                            <img src = {Dropdown} />
                        </Box>
                    </Box>
                    <Box>
                        {showDate && <DatePickerItem/>}
                    </Box>
                </Box>
            </Grid>
            <Grid sx = {{display:"flex",flexDirection:{ xs: "column", sm: "column", md: "row" },}}>
                <Grid sx = {{display:"flex",flexDirection:"column"}}> 
                    <Grid item sx = {{display:"flex",flexDirection:{ xs: "column", sm: "row", md: "row",lg:"row" }}} xs ={12} lg ={12}>
                        <TotalUserCard />
                        <TotalOrderCard />
                        <TotalEarningsCard />
                    </Grid> 
                    <Grid item xs = {12} lg = {12}>
                        <OrderAnalytics />
                    </Grid>
                </Grid>
                <Grid sx = {{display:"flex",flexDirection:{ xs: "column", sm: "row",md:"column" }}}>
                    <Grid item xs={12} sm={12} md={3} lg={4}>
                        <CustomersCard />
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={4}>
                        <EarningItem />
                    </Grid>
                </Grid>
            </Grid>
            <Grid>
                <OrderDetails/>
            </Grid>
        </Grid>

    )
}
export default DashboardMain;