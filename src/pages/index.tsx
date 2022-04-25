import React from 'react';

import { Grid } from '@mui/material';
import Head from 'next/head';
import Start from '@/components/home/start';



const HomePage: React.FC = () => {
  <Head>
    <title>Movier</title>
    <meta
      name='description'
      content='Servico de streaming'
    />
  </Head>


  return (
    <Grid container alignItems="center" justifyContent="center">
      <Start/>
    </Grid>
  )
}

export default HomePage;

