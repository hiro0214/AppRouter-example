import Image from 'next/image'
import Link from 'next/link'
import { getPhoto } from '@/services'
import styles from './style.module.scss'

type Props = {
  params: { id: string }
}

const Page = async (props: Props) => {
  const { params } = props

  const { photo } = await getPhoto({ id: params.id })

  return (
    <div className={styles.container}>
      <div className={styles['img-wrapper']}>
        <Image
          src={`/images/${photo.id}.jpg`}
          alt=''
          width={600}
          height={600}
          priority
          style={{ objectFit: 'contain' }}
        />
      </div>
      <p>{photo.title}</p>
      <Link href='/' className={styles.link}>
        戻る
      </Link>
    </div>
  )
}

export default Page
