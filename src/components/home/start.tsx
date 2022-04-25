import React from 'react';
import { Button, Grid, Link, Paper, Typography } from '@mui/material';
import { CSSProperties } from 'react';

import start from './start.module.scss'



const styles: CSSProperties = {
  position: 'relative',
  background: `linear-gradient(0deg, rgba(2, 2, 2, 0.53), rgba(2, 2, 2, 0.53)), url(hero.jpg)`,
  backgroundSize: 'cover',
  height: '100vh',
  backgroundRepeat: 'no-repeat',
}


const Start: React.FC = () => {
  return (
    <Grid item xs={12} md={12} sm={12}>
      <Paper elevation={0} style={styles}>
        <div className={start.logo}><img src="/icon/logo.svg" alt="" /></div>
        <Grid container direction="column" justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
          <Grid item>
            <h5  className={start.title}>GO TO THE <span className={start.titleBold}>CINEMA</span>...<br />
              WITHOUT <span className={start.titleBold}>LEAVING HOME</span>.</h5>
          </Grid>
          <Grid item>
            <Typography component="p" className={start.text}>
              Launch films at prices that fit in your pocket, <br />
              and the best, watching in the comfort of your home</Typography>
          </Grid>
          <Grid item>
            <Link href='/dashboard' underline='none'>
            <Button variant='contained' fullWidth className={start.button}>Get started!</Button>
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default Start;