export type UserResponseModel = {
    user: {
      id: string
      name: string
      email: string
    },
    token: string
}

export type UserRequestModel = {
  email: string
  password: string
}