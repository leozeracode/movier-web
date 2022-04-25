export type MovieModel = {
  _id: string,
  movie_url: string,
  image_url: string,
  name: string,
  release_date:string,
  classification: string,
  gender: string,
  author: string,
  category: Category,
  price: number,
  due: Date
}

enum Category{
  RELEASE = 1,
  PRERELEASE = 2,
  RELEASED = 3
}