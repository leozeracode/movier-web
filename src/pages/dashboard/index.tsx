import React from 'react';

import { Grid } from '@mui/material';
import Head from 'next/head';
import { DashBoard } from '@/components/dashboard';
import { MovieModel } from '@/model';
import { axiosInstance } from '@/services/axios-config';
import { AxiosResponse } from 'axios';
import {  GetStaticProps } from 'next';

type Props = {
  movies: MovieModel[]
}

const Dashboard: React.FC<Props> = ({movies}) => {
  <Head>
    <title>Movier</title>
    <meta
      name='description'
      content='Dashboard page'
    />
  </Head>


  return (
    <Grid container alignItems="center" justifyContent="center">
        <DashBoard movies={movies}/>
    </Grid>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const response = await axiosInstance.get<any, AxiosResponse<MovieModel[]>>('/movies')
  if(response.data){
    return {
      props: {
        movies: response.data
      },
      revalidate: 5
    }
  }
}

export default Dashboard
