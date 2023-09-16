import Link from "next/link"
import type { ParsedUrlQueryInput } from "querystring"
import type { FC, ReactNode } from "react"

type LinkWrapperProps = {
  href?: string
  query?: string | null | ParsedUrlQueryInput | undefined
  children?: ReactNode
  isDisabled?: boolean
  className?: string
}

const LinkWrapper: FC<LinkWrapperProps> = ({
  href = "#",
  query,
  children,
  isDisabled = false,
  className = "",
}) => {
  return (
    <>
      {isDisabled || href === "#" ? (
        <button className={`${className} pointer-events-none`} disabled>
          {children}
        </button>
      ) : (
        <Link className={className} href={{ pathname: href, query }}>
          {children}
        </Link>
      )}
    </>
  )
}

export default LinkWrapper
