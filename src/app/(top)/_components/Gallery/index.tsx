import axios from 'axios'
import { PhotoCard } from '../PhotoCard'
import styles from './style.module.scss'

type GalleryType = {
  userId: number
  id: number
  title: string
}

export const Gallery = async () => {
  const { data } = await axios.get<GalleryType[]>('https://jsonplaceholder.typicode.com/albums')

  return (
    <div className={styles.container}>
      {data.map((gallery) => (
        <PhotoCard key={gallery.id} id={gallery.id} src={`/images/${gallery.id}.jpg`} />
      ))}
    </div>
  )
}
