import { ExternalLink } from "lucide-react"
import Link from "next/link"


const CustomLink = ({
    href,
    children,
    className,
    ...rest
}) => {
    const isInternalLink = href.startsWith("/")
    const isAnchorLink = href.startsWith("#")

    if (isInternalLink || isAnchorLink) {
        return (
            <Link href={href} className={className} {...rest}>
                {children}
            </Link>
        )
    }

    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            {...rest}
        >
            <span>{children}</span>
            <ExternalLink className="inline-block ml-0.5 w-4 h-4" />
        </Link>
    )
}

export default CustomLink