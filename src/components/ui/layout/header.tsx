"use client"
import { layoutConfig } from "@/config/layout.config";
import { siteConfig } from "@/config/site.config";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const AcmeLogo = () => {
    return <Image src="/donat.png" alt={siteConfig.title} width={26} height={26} priority sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw,33vw" />
};

export default function Header() {
    const pathname = usePathname()

    const getNavItems = () => {
        return siteConfig.navItems.map((item) => {
            const isActive = pathname === item.href
            return (
                <NavbarItem key={item.href}>
                    <Link color="foreground" href={item.href}
                        className={`px-3 py-1 ${isActive ? " text-blue-500" : "text-foreground"} hover:text-blue-300 hover:border hover:border-blue-300 hover:rounded-md transition-colors transition-border duration-200`}>
                        {item.label}
                    </Link>
                </NavbarItem>
            )
        })
    }
    return (
        <Navbar position="static" className={`bg-gray-700 text-white`} style={{ height: `${layoutConfig.headerHeight}` }}>
            <NavbarBrand>
                <Link href="/" className=" flex gap-1">
                    <AcmeLogo />
                    <p className="font-bold text-inherit">{siteConfig.title}</p></Link>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {getNavItems()}

            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat" className="text-white">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}


// https://www.youtube.com/watch?v=KZb53sf-PEg&t=1617s