'use client'
import React from 'react'

type ExternalLinkProps = {
  href: string
  className?: string
  children: React.ReactNode
}

export function ExternalLink({ href, children, className }: ExternalLinkProps) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      onClick={(e) => {
        e.stopPropagation()
      }}
      className={className}
    >
      {children}
    </a>
  )
}
