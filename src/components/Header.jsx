import Link from "next/link";
import Image from "next/image";

export default function Header({ title }){
    return(
        <header className="flex justify-between items-center p-2 px-8 bg-blue-300">
            <h2 className="flex justify-between items-center p-2">
                <div className="mx-2">
                    {title}
                </div>
                <Image 
                    src="/brown-star.png"
                    alt="Brown Star Icon"
                    width={40}
                    height={40}
                />
            </h2>

            <nav className="flex gap-6">
                <Link href="/" className="nav-link">Home</Link>
                <Link href="/about" className="nav-link">About</Link>
                <Link href="/projects" className="nav-link">Projects</Link>
                <Link href="/blog" className="nav-link">Blog</Link>
                <Link href="/contact" className="nav-link">Contact</Link>
            </nav>

        </header>
    )
}