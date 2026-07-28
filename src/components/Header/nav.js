'use client'

const links = [
  { name: 'Music', href: '/music'},
  { name: 'Gallery', href: '/gallery'},
  { name: 'Contact', href: '/contact'},
];

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from 'clsx';

export default function Menu() {
    const pathname = usePathname()
    return (
        <>
           <ul className="flex">
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                        '',
                        {
                            'underline': pathname === link.href,
                        },
                        )}
                    >
                    {link.name}
                    </Link>
                );
            })}
           </ul>
           
        </>
    )
}