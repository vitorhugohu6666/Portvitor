"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"

export default function Menu() {
    const caminho = usePathname()

    return (
        <nav className="flex gap-6">
            <MenuItem href="/" selecionado={true}>Inicio</MenuItem>
            <MenuItem href="/projeto/1" selecionado={caminho.startsWith("/projeto")}>Projetos</MenuItem>
            <MenuItem href="https://api.whatsapp.com/send/?phone=5585987718085&type=phone_number" selecionado={false} novaAba={true}>Contato</MenuItem>
        </nav>
    )
}

function MenuItem(props: {
    href: string
    children: React.ReactNode
    selecionado: boolean
    novaAba?: boolean
}) {
    return (
        <Link href={props.href} target={props.novaAba ? "_blank" : "_self"}>
        <span className={`
            flex items-center gap-2 text-sm border-red-600 houver:text-white ${props.selecionado ? "border-b-4 text-white" : "text-zinc-300"}
            `}>{props.children}</span>
        </Link>
    )
}