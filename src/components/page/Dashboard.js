import {  CssBaseline, Grid, Typography } from '@material-ui/core';


const Dashboard = () => {
  return (
  <>
    <CssBaseline />
    <Grid container>
      <Grid item sm={4} sx={{ backgroundColor: 'gray', p: 5, color: 'white' }}>
        <h1>Dashboard</h1>
        <Typography variant='h5'>Welcome User</Typography>
        
       
      </Grid>
      
    </Grid>
  </>
  )
}

export default Dashboard;