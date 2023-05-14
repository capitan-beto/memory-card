import ChooseLevel from './ChooseLevel'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Bienvenido a Memory Card Fútbol</h1>
      <ChooseLevel/>
    </main>
  )
}
