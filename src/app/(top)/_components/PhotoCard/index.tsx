import Image from 'next/image'
import { ViewTransitionLink } from '@/components'
import styles from './style.module.scss'

type Props = {
  id: number
  src: string
}

export const PhotoCard: React.FC<Props> = (props) => {
  const { id, src } = props

  return (
    <div className={styles.container}>
      <ViewTransitionLink
        href={`/photo/${id}`}
        className={styles.link}
        style={{ viewTransitionName: `photo-img-${id}` }}
      >
        <Image src={src} alt='' width={300} height={200} priority className={styles.img} />
      </ViewTransitionLink>
    </div>
  )
}
