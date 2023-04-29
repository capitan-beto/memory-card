import Image from 'next/image'
import styles from './page.module.css'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to Memory Card Football</h1>
      <h2>Please select Difficulty</h2>
      <Footer/>
    </main>
  )
}
