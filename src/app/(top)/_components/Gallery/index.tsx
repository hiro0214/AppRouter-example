import { getPhotos } from '@/services'
import { PhotoCard } from '../PhotoCard'
import styles from './style.module.scss'

export const Gallery = async () => {
  const { photos } = await getPhotos()

  return (
    <div className={styles.container}>
      {photos.map((photo) => (
        <PhotoCard key={photo.id} id={photo.id} src={`/images/${photo.id}.jpg`} />
      ))}
    </div>
  )
}
