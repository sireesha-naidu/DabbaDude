import { Grid, Box, Typography } from "@mui/material";
import Dropdown from '../../assets/Dropdown.svg';
import { Line } from "react-chartjs-2";
import MonthPicker from "./MonthPicker";

function OrderAnalytics() {
    const randomData = [
        20, 35, 24, 46, 31,99, 59, 40, 50, 60, 44, 
        70, 45, 52, 64, 39, 49, 66, 56, 42, 58, 
        73, 47, 63, 55, 72,98, 62, 54, 51, 69, 60, 
        74, 64, 51, 67, 59,100, 43, 62, 48, 54, 68, 
        70, 55, 61, 53, 66, 71,,20, 63, 49, 75, 66, 
        72, 50, 56, 52, 64, 59, 47,40, 60, 78, 53, 
        58, 65, 49, 61, 73,20, 69, 55, 76, 63, 70, 
        74, 66, 52, 64, 61, 49, 71, 67, 62, 60, 
        54, 59, 65, 57, 72, 68, 75, 60, 54, 70, 
        77, 61, 69, 62, 55, 48, 66, 53, 75, 66
        
      ];
  return (
    <Grid
      sx={{ backgroundColor: "white", padding: "10px 10px 0px 15px", borderRadius: "10px", height: "405px", margin: "10px", }} >
      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", mb: "20px", }} >
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Order Analytics
          </Typography>
        </Box>
        <Box>
          <MonthPicker/>
        </Box>
      </Box>
      <Box sx={{ height: "300px" }}>
        <Line
          data={{
            labels: ["5k", "10k", "15k", "20k", "25k","30k","35k","40k","45k","50k","55k","60k"], // X-axis labels
            datasets: [
              {
                data: randomData, // Y-axis values in percentages
                borderColor: "rgba(67, 121, 238, 1)", // Line color
                borderWidth: 2,
                pointRadius: 2,
                pointBackgroundColor: "rgba(67, 121, 238, 1)", 
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                  display: false,
                },
              },
            scales: {
                x: {
                    grid: {
                        display: false, // Disable vertical grid lines
                    },
                    ticks: {
                        autoSkip: true,
                      },
                },
                y: {
                grid: {
                    display: true, // Show horizontal grid lines
                    drawOnChartArea: true, // Draw grid lines on the chart area
                    lineWidth: 0.5, // Set the line width for the horizontal grid lines
                    },
                ticks: {
                    autoSkip: true,
                    stepSize: 20,// Adjust step size for 20, 40, 60, 80
                    callback: (value) => `${value}%`, // Add percentage symbol to y-axis ticks
                    min: 20,
                    max: 100, 
                },
                beginAtZero: false, 
                },
            },
          }}
        />
      </Box>
    </Grid>
  );
}

export default OrderAnalytics;
