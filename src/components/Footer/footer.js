import Logo from "../ui/logo";
import Links from "../ui/links";
import { PiCopyrightLight } from "react-icons/pi";

export default function Footer() {
    return (
        <footer className="border-t border-border mt-32">
            <div className="mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-8 px-6 py-12 md:flex-row">

                <Logo />

                <p className="flex items-center gap-2 text-sm text-muted-foreground">
                    <PiCopyrightLight />
                    {new Date().getFullYear()} UNWANTED WRLD. All rights reserved.
                </p>

                <Links />

            </div>
        </footer>
    );
}