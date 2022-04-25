import React from 'react';
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { CSSProperties } from 'react';
import { Form, Formik } from 'formik';

import login from './login.module.scss'
import { useAuth } from '@/hooks';
import { UserRequestModel } from '@/model';


const styles: CSSProperties = {
  background: `linear-gradient(0deg, rgba(2, 2, 2, 0.53), rgba(2, 2, 2, 0.53)), url(hero.jpg)`,
  backgroundSize: 'cover',
  height: '100vh',
  backgroundRepeat: 'no-repeat',
}


const Login: React.FC = () => {
 const {userAuth, signIn} = useAuth()

 const onSubmit = (values: UserRequestModel) => {
   if(values.email && values.password){
     signIn(values)
   }else{
     alert('Preencha os dados!')
   }
 }
  
  return (
    <Grid item xs={12} md={12} sm={12}>
      <Paper elevation={0} style={styles}>
        <Grid container justifyContent="center" alignItems="center" style={{ height: '100%' }}>
          <Grid item xs={10} md={3} sm={5}>
            <Paper elevation={1}  className={login.form}>
              <Formik initialValues={{...userAuth}} enableReinitialize onSubmit={onSubmit}>
                {({ values, handleSubmit, handleChange }) => (
                  <Form onSubmit={handleSubmit}>
                    <Grid container spacing={2} justifyContent="center" alignItems="center">
                      <Grid item ><Typography variant='h5' className={login.title}>Sign in</Typography></Grid>
                      <Grid item xs={12} md={12} sm={12}>
                        <TextField
                        color='secondary'
                          className={login.input}
                          label="Your best email"
                          fullWidth
                          variant='outlined'
                          name="email"
                          value={values.email}
                          required
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12} md={12} sm={12}>
                        <TextField
                        color='secondary'
                          className={login.input}
                          label="Your best password"
                          fullWidth
                          required
                          variant='outlined'
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                        />
                      </Grid>

                      <Grid item xs={12} md={12} sm={12}><Button type='submit' variant='contained' fullWidth className={login.button}>Login</Button></Grid>
                    </Grid>

                  </Form>
                )}
              </Formik>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default Login;