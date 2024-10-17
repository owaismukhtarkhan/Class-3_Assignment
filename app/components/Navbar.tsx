import Link from "next/link"
export default function NavBar(){
    return (
        <div>
            <ul className="flex justify-end gap-10 bg-red-500">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Me</Link></li>
                <li><Link href="/education">Education</Link></li>
                <li><Link href="/experience">Experience</Link></li>
                <li><Link href="/skills">Skills</Link></li>
                <li><Link href="/contact">Contact Me</Link></li>
            </ul>
        </div>
    )
}