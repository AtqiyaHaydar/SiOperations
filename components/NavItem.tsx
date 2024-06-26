"use client"

import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface NavItemI {
  title: string
  href: string
}

const NavItem = ({ title, href }: NavItemI) => {
  const pathname = usePathname()
  
  return (
    <Link href={href}>
      <Button 
        variant={pathname === href ? "default" : "ghost"} 
        className={cn(
          pathname === "/" && pathname === href && 'bg-gradient-to-r gradient-1',
          pathname === "/tasks" && pathname === href && 'bg-gradient-to-r gradient-2',
          pathname === "/projects" && pathname === href && 'bg-gradient-to-r gradient-8',
          pathname === href && "text-white font-bold",
          'text-center w-[200px] transition-all'
        )}
      >
        {title}
      </Button>
    </Link>
  )
}

export default NavItem