import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import { Grid, Typography,Box } from '@mui/material';

function CustomersCard() {
  return(
    <Grid sx = {{height:"280px",width:{xs:"fullwidth",md:"230px"},backgroundColor:"white",padding:"10px",borderRadius:"10px",margin:"10px 0px 30px 10px"}}>
      <Box >
        <Typography variant='h6' sx = {{fontWeight:"bold"}}>Customers</Typography>
      </Box>
      <Box>
        <Doughnut
          data = {{
            datasets: [{
              label: ['New','Repeated'],
              data: [30000,12000],
              backgroundColor: ['rgb(54, 162, 235)',"rgba(192, 210, 240, 1)"],
              borderRadius:5,
              borderWidth:0,
            }],
            labels: ["New","Repeated"],
            color:"rgba(40, 45, 50, 1)"
          }}
            options = {{
              responsive: true,
              maintainAspectRatio: false,
              rotation: -90, 
              circumference: 180, 
              cutout:"80%",
              plugins: {
                legend: {
                  display: true,
                  position: "bottom", 
                  labels: {
                    usePointStyle: true,
                    padding:30,
                    align: "start",
                    boxWidth: 20,
                  },
                }}
            }}
        />
      </Box>
    </Grid>

  )}
    

export default CustomersCard;
