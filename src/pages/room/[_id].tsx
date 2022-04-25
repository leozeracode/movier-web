import React from 'react';

import { Grid } from '@mui/material';
import Head from 'next/head';
import { Room } from '@/components/room';
import { MovieProvider } from '@/contexts';
import withAuth from '../_privateRoute';



const RoomPage: React.FC = () => {
  <Head>
    <title>Movier</title>
    <meta
      name='description'
      content='Dashboard page'
    />
  </Head>


  return (
    <Grid container alignItems="center" justifyContent="center">
      <MovieProvider>
      <Room />
      </MovieProvider>
    </Grid>
  )
}


export default withAuth(RoomPage)
