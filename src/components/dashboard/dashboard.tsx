import React, { useEffect } from 'react';
import { MovieModel } from '@/model';
import { Grid } from '@mui/material';

import dashboard from './dashboard.module.scss'
import { Moviecard } from '../design/card';

type Props = {
  movies: MovieModel[]
}


const DashBoard: React.FC<Props> = ({ movies }) => {

  return (
    <Grid item xs={11} md={12} sm={12} style={{ padding: '100px 0' }}>
      <header className={dashboard.header}>
        <Grid container alignItems="center" style={{ height: '100%' }}>
          <Grid item ><img src="/icon/logo.svg" alt="" className={dashboard.logo} /></Grid>
        </Grid>
      </header>

      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={11} md={11} sm={11}>
          <Grid container spacing={3}>
            {
              movies.map((movie, index) => (
                <Grid item >
                  <Moviecard movie={movie}/>
                </Grid>
              ))
            }
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}




export default DashBoard;
