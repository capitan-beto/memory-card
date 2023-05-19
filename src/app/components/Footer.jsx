import Image from "next/image";
import styles from "../page.module.css";

export default function Footer() {
    return(
        <div className={styles.footer}> 
            <p>Project created for Odin Project by Carlos Nana</p>
            <a href="https://github.com/capitan-beto" target="_blank">
                <Image src="github-mark.svg"
                 alt="github"
                 height={22} width={22}
                 />
            </a>
        </div>
    )
}