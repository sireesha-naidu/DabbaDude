import { Grid,Box, Typography } from "@mui/material"
import Up from '../../assets/Up.svg'
import ItemBox from '../../assets/ItemBox.svg'

function TotalOrderCard(){
    return(
    <Grid sx = {{backgroundColor:"white",padding:"20px 0px 0px 15px",borderRadius:"10px",width:{xs:"fullwidth",sm:"230px"},height:"170px",margin:"10px"}}>
        <Box sx = {{display:"flex",flexDirection:"row",justifyContent:"space-between",mb:"20px"}}>
            <Box>
                <Typography variant="body2">Total Order</Typography>
                <Typography variant="h6" sx = {{fontWeight:"bold"}}>10293</Typography>
            </Box>
            <Box>
                <img src = {ItemBox} style = {{width:"50px",height:"50px",mr:0}}/>
            </Box>
        </Box>
        <Box sx = {{display:"flex",flexDirection:"row"}}>
            <img src = {Up} style={{ marginRight:"5px", padding: 0 }}/>
            <Typography variant = "body2"> 1.3% Up from yesterday</Typography>
        </Box>        
    </Grid>
    )
}
export default TotalOrderCard