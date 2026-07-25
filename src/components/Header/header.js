import Menu from "./nav"
import Logo from "./logo"
import Links from "./links"

export default function Header() {
    return (
        <div className="w-full fixed py-3 bg-black">
            <div className="flex items-center justify-between m-auto max-w-[96%] lg:max-w-[1240px] w-full">
                <Logo />
                <Menu />
                <Links />
            </div>
        </div>

    )
}