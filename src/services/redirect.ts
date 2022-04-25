
import { ServerResponse } from 'http'
import Router from 'next/router'

export const redirectToLogin = async (server?: ServerResponse): Promise<void> => {
  const login = '/login?redirected=true'
  if (server) {
    server.writeHead(302, {
      Location: login
    })
    server.end()
  } else {
    Router.push(login)
  }
}