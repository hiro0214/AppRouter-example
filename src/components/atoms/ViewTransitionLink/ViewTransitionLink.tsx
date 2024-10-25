'use client'

import { ComponentProps, MouseEvent } from 'react'
import Link from 'next/link'
import { useViewTransitionRouter } from '@/hooks'

type Props = ComponentProps<typeof Link>

export const ViewTransitionLink = (props: Props) => {
  const router = useViewTransitionRouter()

  const handleClicklink = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    router.push(e.currentTarget.href.toString())
  }

  return <Link {...props} onClick={handleClicklink} />
}
