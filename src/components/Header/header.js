import Menu from "./nav";
import Logo from "../ui/logo";
import Links from "../ui/links";

export default function Header() {
    return (
        <header className="fixed top-0 z-50 w-full bg-background border-b border-border">
            <div className="mx-auto flex h-20 max-w-[1240px] items-center justify-between px-6">
                <Logo />
                <Menu />
                <Links />
            </div>
        </header>
    );
}