import styles from "../page.module.css";
import {players} from "./data";

export default function Easy() {

    return (
        <main className={styles.main}>
            <nav>
                <ul>
                    {players.map(({ name, alt }) => {
                        return <li key={name}>
                            {name};
                        </li>
                    })}
                </ul>
            </nav>
        </main>
    )
}