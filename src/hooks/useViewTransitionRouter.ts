'use client'

import { useLayoutEffect, useRef } from 'react'
import { Route } from 'next'
import { usePathname, useRouter } from 'next/navigation'

export const useViewTransitionRouter = () => {
  const router = useRouter()
  const pathname = usePathname()

  const promiseCallbacks = useRef<Record<'resolve' | 'reject', (value: unknown) => void> | null>(
    null
  )

  useLayoutEffect(() => {
    return () => {
      if (promiseCallbacks.current) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        promiseCallbacks.current.resolve()
        promiseCallbacks.current = null
      }
    }
  }, [pathname])

  const onViewTransition = (href: Route) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    document.startViewTransition(() => {
      return new Promise((resolve, reject) => {
        promiseCallbacks.current = { resolve, reject }
        router.push(href)
      })
    })
  }

  const transitionPush = (href: Route) => {
    onViewTransition(href)
  }

  return { ...router, push: transitionPush }
}
