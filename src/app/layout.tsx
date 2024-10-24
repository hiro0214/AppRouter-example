import { ReactNode } from 'react'
import '@/styles/style.scss'

type Props = {
  children: ReactNode
}

const RootLayout = (props: Props) => {
  const { children } = props

  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
