'use client'

import { useState } from 'react'
import { clsx } from 'clsx'
import Image from 'next/image'
import { ViewTransitionLink } from '@/components'
import styles from './style.module.scss'

type Props = {
  id: number
  src: string
}

export const PhotoCard: React.FC<Props> = (props) => {
  const { id, src } = props

  const [isTarget, setIsTarget] = useState(false)

  return (
    <div className={styles.container}>
      <ViewTransitionLink
        href={`/photo/${id}`}
        onMouseOver={() => setIsTarget(true)}
        onMouseLeave={() => setIsTarget(false)}
        className={clsx(styles.link, isTarget && styles['target-img'])}
      >
        <Image src={src} alt='' width={300} height={200} priority className={styles.img} />
      </ViewTransitionLink>
    </div>
  )
}
