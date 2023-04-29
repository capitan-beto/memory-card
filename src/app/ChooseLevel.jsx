import Link from "next/link";
import Image from "next/image";

const links = [{
    label: "Easy",
    route: "/easy",
    name: "Argentina 1986",
    src: "argentina.svg",
    alt: "Argentina"
}, {
    label: "Medium",
    route: "/medium",
    name: "Boca 2003",
    src: "boque.svg",
    alt: "Boca Juniors"
}, {
    label: "Hard",
    route: "/hard",
    name: "Ferro 1982",
    src: "fco.svg",
    alt: "Ferrocarril Oeste"
}];

export default function ChooseLevel() {


    return(
        <header>
            <nav>
                <ul>
                    {links.map(({ label, route, name, src, alt }) => {
                        return <li key={route}>
                            <Link href={route}>
                                {label}
                                {name}
                                <Image
                                  src={src}
                                  alt={alt}
                                  width={64}
                                  height={64}
                                />
                            </Link>
                        </li>
                    })}
                </ul>
            </nav>
        </header>
    )
}