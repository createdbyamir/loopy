'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
    { name: "Music", href: "/music" },
    { name: "Gallery", href: "/gallery" },
    { name: "Tour", href: "/tour" },
];

export default function Menu() {
    const pathname = usePathname();

    return (
        <nav>
            <ul className="flex items-center gap-10">
                {links.map((link) => (
                    <li key={link.name}>
                        <Link
                            href={link.href}
                            className={clsx(
                                "uppercase tracking-[0.2em] transition-opacity duration-300",
                                pathname === link.href
                                    ? "opacity-100"
                                    : "opacity-60 hover:opacity-100"
                            )}
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}