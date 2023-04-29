import Image from "next/image";

export default function Footer() {
    return(
        <div>
            Project created for Odin Project by Carlos Nana
            <Image src="github-mark.svg" alt="github" height={32} width={32}/>
        </div>
    )
}