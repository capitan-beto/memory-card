import Image from "next/image";
import styles from "../page.module.css";

export default function Footer() {
    return(
        <div className={styles.footer}> 
            Project created for Odin Project by Carlos Nana
            <Image src="github-mark.svg" alt="github" height={22} width={22}/>
        </div>
    )
}