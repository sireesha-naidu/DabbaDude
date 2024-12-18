import next from '../../assets/next.svg';
import { Grid, Box, Typography } from '@mui/material';

function EarningItem() {
  return (
    <Grid
      sx={{
        height: '280px',
        width:{xs:"fullwidth",md:"230px"},
        backgroundColor: 'white',
        padding: "20px",
        borderRadius: '10px',
        margin: '5px 0px 0px 10px',
      }}
    >
      <Typography variant="body2" sx={{ fontWeight: 'bold', marginBottom: '15px' }}>
        Earnings by item
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',mb:3 }}>

        <Box sx={{ backgroundColor: 'rgba(222, 204, 254, 1)', borderRadius: '5px', width: '40px', height: '40px', }} ></Box>

        <Box sx={{ marginLeft: '10px', flex: 1 }}>
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
            Egg Biryani
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '0.75rem', color: 'gray' }}>
            Lorem ipsum
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={next} alt="Next" />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',mb:3 }}>

        <Box sx={{ backgroundColor:" rgba(215, 255, 195, 1)", borderRadius: '5px', width: '40px', height: '40px', }} ></Box>

        <Box sx={{ marginLeft: '10px', flex: 1 }}>
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
            Curry
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '0.75rem', color: 'gray' }}>
            Lorem ipsum
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={next} alt="Next" />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

        <Box sx={{ backgroundColor: 'rgba(255, 223, 223, 1)', borderRadius: '5px', width: '40px', height: '40px', }} ></Box>

        <Box sx={{ marginLeft: '10px', flex: 1 }}>
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
            Sambar
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '0.75rem', color: 'gray' }}>
            Lorem ipsum
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={next} alt="Next" />
        </Box>
      </Box>
    </Grid>
  );
}

export default EarningItem;
