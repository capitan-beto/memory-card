"use client"

import styles from "./page.module.css";
import Image from "next/image";
import { players} from "./data";
import { sort } from "../gameLogic";
import { useState } from "react";

export default function Easy() {
    const [items, setItems] = useState(players);

    const handleItems = () => {
        setItems([...sort(items)]);
    }

    return (
        <main className={styles.main}>
            <nav>
                <ul className={styles.container}>
                    {items.map(({ name, alt, src }) => {
                        return <li key={name} className={styles.imageContainer}>
                            <Image
                              onClick={() => handleItems()}
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