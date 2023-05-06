"use client"

import styles from "./page.module.css";
import Image from "next/image";
import { players } from "./data";
import { sort, check } from "../gameLogic";
import { useState } from "react";

export default function Easy() {
    const [items, setItems] = useState(players);
    const [score, setScore] = useState(0);
    const [visited, setVisited] = useState([]);

    const handleItems = (name) => {
        if (check(name, visited)) {
            setScore(0);
            setVisited([]);
        } else {
            setVisited([...visited, name]);
            setScore(prev => prev + 1);
        }
        setItems([...sort(items)]);
    }

    const Score = () => {
        if (score  === 12) return <h3>Congrats you won!
             Try other level or click a player to play again...
            </h3>;
        return <h3>Score: {score}</h3>
    }

    return (
        <main className={styles.main}>
            <div>
                <h3>Back</h3>
                <Score/>
            </div>
            <nav>
                <ul className={styles.container}>
                    {items.map(({ name, alt, src }) => {
                        return <li 
                          key={name}  
                          className={styles.imageContainer} 
                          onClick={() => handleItems(name)}
                        >
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