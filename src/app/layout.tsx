import { ReactNode } from 'react'
import '@/styles/style.scss'

type Props = {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
