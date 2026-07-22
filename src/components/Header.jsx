import Link from "next/link";
import Image from "next/image";

export default function Header({ title }){
    return(
        <header className="flex justify-between items-center p-4 px-4 bg-blue-300">
            <h3 className="flex justify-between items-center">
                <div className="ml-1 leading-none">
                    {title}
                </div>
                <Image 
                    src="/brown-star.png"
                    alt="Brown Star Icon"
                    width={30}
                    height={30}
                />
            </h3>

            <nav className="flex gap-3">
                <Link href="/" className="nav-link">Home</Link>
                <Link href="/about" className="nav-link">About</Link>
                <Link href="/projects" className="nav-link">Projects</Link>
                <Link href="/blog" className="nav-link">Blog</Link>
                <Link href="/contact" className="nav-link">Contact</Link>
            </nav>

        </header>
    )
}