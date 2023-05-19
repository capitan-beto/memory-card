"use client"
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css"
import { useState } from "react";


const links = [{
    label: "Fácil",
    route: "/easy",
    name: "Argentina Campeón del Mundo 1986",
    src: "argentina.svg",
    alt: "Argentina"
}, {
    label: "Media",
    route: "/medium",
    name: "Boca Campeón Intercontinental 2003",
    src: "boque.svg",
    alt: "Boca Juniors"
}, {
    label: "Difícil",
    route: "/hard",
    name: "Ferro Campeón Invicto 1982",
    src: "fco.svg",
    alt: "Ferrocarril Oeste"
}];

export default function ChooseLevel() {
    const [team, setTeam] = useState("Elegí un equipo");
    const [level, setLevel] = useState(null);

    const handleMouseEnter = (team, level) => {
        setTeam(team);
        setLevel(level);
    }

    const handleMouseLeave = () => {
        setTeam("Seleccioná un equipo");
        setLevel(null);

    }

    return(
        <div className={styles.chooseLevel}>
            <nav>
                <div  className={styles.levelText}>
                    <h1>{team}</h1>
                    <h2>Dificultad: {level}</h2>
                </div>
                <ul>
                    {links.map(({ label, route, name, src, alt }) => {
                        return <li key={route}
                          onMouseEnter={() => handleMouseEnter(name, label)}
                          onMouseLeave={() => handleMouseLeave()}
                        >
                            <Link href={route}>
                                <Image
                                  className={styles.img}
                                  src={src}
                                  alt={alt}
                                  width={128}
                                  height={128}
                                  />
                            </Link>
                        </li>
                    })}
                </ul>
            </nav>
        </div>
    )
}