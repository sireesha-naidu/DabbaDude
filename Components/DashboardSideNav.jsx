import MenuIcon from '@mui/icons-material/Menu';
import SideNavList from '../Components/SideNavList';
import { Grid, Box, Typography } from '@mui/material';
import { useState } from "react";

function SideNav() {
  const [sideopen, Setsideopen] = useState(false);

  // Toggle the visibility of the side navigation
  function toggleSideOpen() {
    Setsideopen((prev) => !prev);
  }

  return (
    <Grid container direction="column" alignItems="flex-start" sx={{ position: 'relative',height:"100%"}}>
      
      {/* Hamburger Menu Icon for Mobile View */}
      <Grid item sx={{ display: { xs: "block", md: "none" }, position: 'absolute', top: '25px', left: '-10px', zIndex: 10, }}>
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
          <MenuIcon sx={{ fontSize: "30px" }} onClick={toggleSideOpen} />
        </Box>
      </Grid>

      {/* Sidebar for Desktop View */}
      <Grid item sx={{ display: { xs: "none", md: "block" }, marginTop:"20px"}}>
        <Box sx = {{position:"fixed"}}>
          <Typography variant="h6" sx={{ paddingLeft: "20px", fontWeight: "bold" }}>DabbaDude</Typography>
          <SideNavList />
        </Box>
      </Grid>

      {/* Sidebar for Mobile View (appears when side is open) */}
      {sideopen && (
        <Box sx={{
          display: { xs: "block", lg: "none" },
          position: 'absolute',
          width: '200px',
          height:"100vh",
          backgroundColor: 'white',
          zIndex: 5,
          padding: '20px',
          paddingTop:"60px",
          left:-30,
          top:0,
          boxShadow: '2px 0 5px rgba(0, 0, 0, 0.3)', // Adds a slight shadow for better visibility
          overflowY: 'auto', // Ensure the menu is scrollable if needed
        }}>
          <SideNavList />
        </Box>
      )}
    </Grid>
  );
}

export default SideNav;