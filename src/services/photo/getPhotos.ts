import type { Photo } from './photo.type'

export const getPhotos = async () => {
  const photos: Photo[] = await fetch('https://jsonplaceholder.typicode.com/albums').then((res) =>
    res.json()
  )

  return { photos }
}
