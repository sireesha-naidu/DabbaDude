import DashboardHeader from './DashboardHeader';
import DashboardSideNav from './/DashboardSideNav';
import { Grid, Box } from '@mui/material';
import DashboardMain from './DashboardMain';
import { Routes,Route } from 'react-router-dom';

function Dashboard() {
  return (
    <Grid container sx={{height: "100vh",display: { xs: 'block', md: 'flex' },width:"100vw"}}>
      <Box sx = {{display:"flex",flexDirection:{xs:"column",md:"row"}}}>
        <Box sx = {{display:"flex",flexDirection:"row",gap:2}}>
          <Box >
            <DashboardSideNav />
          </Box>
          <Box sx={{display: { xs: 'block', md: 'none' }}}>
              <DashboardHeader />
            </Box>
        </Box>
        <Box sx={{flex: 1,display: "flex",flexDirection: "column",ml:{xs:0,md:"200px"}}}>
          <Box sx={{display: { xs: 'none', md: 'block' },}}>
            <DashboardHeader />
          </Box>
          <Routes>
            <Route path = "/dashboard-main" element ={<DashboardMain/>} />
          </Routes>
        </Box>
      </Box>
    </Grid>
  );
}

export default Dashboard;