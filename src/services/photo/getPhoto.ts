import type { Photo } from './photo.type'

type Props = {
  id: string
}

export const getPhoto = async (props: Props) => {
  const { id } = props

  const photo: Photo = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`).then(
    (res) => res.json()
  )

  return { photo }
}
