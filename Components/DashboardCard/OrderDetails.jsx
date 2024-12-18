import { Grid,Box,Typography} from "@mui/material"
import Dropdown from '../../assets/Dropdown.svg'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import MonthPicker from "./MonthPicker";
function OrderDetails(){
    const row = { name: "Rajesh", location: "Hyderabad, Telangana", date: "2024-12-17", status: "Delivered" }
      ;
    return(
        <Grid sx={{ backgroundColor: "white", padding: "10px 10px 0px 15px", borderRadius: "10px", height: "400px", margin: "10px 0px 10px 10px", }} >
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", mb: "20px", }} >
                <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Order Details
                </Typography>
                </Box>
                <Box>
                   <MonthPicker/>
                </Box>
            </Box>
            <TableContainer>
                <Table sx={{borderCollapse: 'collapse',gap:3 }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ backgroundColor: 'rgba(241, 244, 249, 1)',fontWeight:"bold" }}>
                            <TableCell  sx={{ border: 'none' }}>Name</TableCell>
                            <TableCell  sx={{ border: 'none' }}>Location</TableCell>
                            <TableCell  sx={{ border: 'none' }}>Date/Time</TableCell>
                            <TableCell  sx={{ border: 'none' }}>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell sx={{ padding: '10px',border: 'none' }}>{row.name}</TableCell>
                            <TableCell sx={{ padding: '10px',border: 'none' }}>{row.location}</TableCell>
                            <TableCell sx={{ padding: '10px',border: 'none' }}>{row.date}</TableCell>
                            <TableCell sx={{ padding: '10px' ,border: 'none'}}>{row.status}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                </TableContainer>

        </Grid>
    )
}
export default OrderDetails