import styles from "../easy/page.module.css";
import Image from "next/image";
import { players } from "./data";

export default function Hard() {

    return (
        <main className={styles.main}>
            <nav>
                <ul className={styles.container}>
                    {players.map(({ name, alt, src }) => {
                        return <li key={name} className={styles.imageContainer}>
                            <Image
                            className={styles.image}
                              alt={alt}
                              src={src}
                              width={120}
                              height={150}
                            />
                            {name}
                        </li>
                    })}
                </ul>
            </nav>
        </main>
    )
}