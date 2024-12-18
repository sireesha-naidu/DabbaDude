import { Grid,Box, Typography } from "@mui/material"
import down from '../../assets/down.svg'
import Graph from '../../assets/Graph.svg'

function TotalEarningsCard(){
    return(
    <Grid sx = {{backgroundColor:"white",padding:"20px 0px 0px 15px",borderRadius:"10px",width:{xs:"fullwidth",sm:"230px"},height:"170px",margin:"10px"}}>
        <Box sx = {{display:"flex",flexDirection:"row",justifyContent:"space-between",mb:"20px"}}>
            <Box>
                <Typography variant="body2">Total Earnings</Typography>
                <Typography variant="h6" sx = {{fontWeight:"bold"}}>89,900/-</Typography>
            </Box>
            <Box>
                <img src = {Graph} style = {{width:"50px",height:"50px",mr:0}}/>
            </Box>
        </Box>
        <Box sx = {{display:"flex",flexDirection:"row"}}>
            <img src = {down} style={{ marginRight:"5px", padding: 0 }}/>
            <Typography variant = "body2"> 4.3% Down from yesterday</Typography>
        </Box>        
    </Grid>
    )
}
export default TotalEarningsCard