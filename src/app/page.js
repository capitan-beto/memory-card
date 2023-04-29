import ChooseLevel from './ChooseLevel'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to Memory Card Football</h1>
      <ChooseLevel/>
      <h2>Please select Difficulty</h2>
    </main>
  )
}
