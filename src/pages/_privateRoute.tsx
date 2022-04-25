import React from 'react'
import ServerCookie from 'next-cookies'
import { NextPageContext } from 'next'
import { AuthToken } from '@/services/auth-token'
import { redirectToLogin } from '@/services/redirect'


export type AuthProps = {
  token: string
}

const withAuth = (WrappedComponent: any): any => {
  const Auth = (props): any => {
    return (
      <WrappedComponent {...props} />
    )
  }

  Auth.getInitialProps = async (ctx: NextPageContext): Promise<object> => {
    const token = ServerCookie(ctx)[process.env.NEXT_PUBLIC_TOKEN_STORAGE_KEY]
    const auth = new AuthToken(token)
    const initialProps = { auth }
    if (auth.isExpired) redirectToLogin(ctx.res)
    if (WrappedComponent.getInitialProps) {
      const wrappedProps = await WrappedComponent.getInitialProps(initialProps)
      return { ...wrappedProps, auth }
    }
    return initialProps
  }

  if (WrappedComponent.getInitialProps) {
    Auth.getInitialProps = WrappedComponent.getInitialProps
  }

  return Auth
}

export default withAuth



