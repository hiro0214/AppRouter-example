import Image from 'next/image'
import Link from 'next/link'
import styles from './style.module.scss'

type Props = {
  id: number
  src: string
}

export const PhotoCard: React.FC<Props> = (props) => {
  const { id, src } = props

  return (
    <div className={styles.container}>
      <Link href={`/photo/${id}`} className={styles.link}>
        <Image src={src} alt='' width={300} height={200} priority className={styles.img} />
      </Link>
    </div>
  )
}
