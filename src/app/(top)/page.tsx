import { Gallery } from './_components/Gallery'
import styles from './style.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Gallery />
    </div>
  )
}
