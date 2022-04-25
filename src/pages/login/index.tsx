import React from 'react';

import { Grid } from '@mui/material';
import Head from 'next/head';
import { Login } from '@/components/login';

const LoginPage: React.FC = () => {
  <Head>
    <title>Movier</title>
    <meta
      name='description'
      content='Login page'
    />
  </Head>


  return (
    <Grid container alignItems="center" justifyContent="center">
      <Login/>
    </Grid>
  )
}

export default LoginPage;
