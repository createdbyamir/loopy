import Link from "next/link";

export default function Logo() {
    return (
        <Link
            href="/"
            className="font-heading text-2xl uppercase tracking-[0.3em] transition-opacity duration-300 hover:opacity-80"
        >
            Loopy
        </Link>
    );
}