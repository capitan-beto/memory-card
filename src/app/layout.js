import Footer from './components/Footer'
import './globals.css'
import { Bebas_Neue } from 'next/font/google'

const font = Bebas_Neue({ subsets: ['latin'], weight: ["400"] })

export const metadata = {
  title: 'Memory Card Fútbol',
  description: 'Memory card del fútbol argentino',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
