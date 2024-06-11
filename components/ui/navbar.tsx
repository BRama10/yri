'use client';

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import { useState, useEffect } from 'react';

import Logo from '@/public/Logo.svg'
import Image from "next/image";

import { usePathname, useRouter } from 'next/navigation'

export const WebNavbarV1 = () => {
  const [open, setOpen] = useState(false);

  const pathname = usePathname()
  const router = useRouter();

  return (
    <Navbar isBordered className='w-full bg-inherit z-[40] h-[4rem]' classNames={{
      wrapper: 'w-full !max-w-full'
    }}>
      <NavbarMenuToggle
          aria-label={open ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      <NavbarBrand className='justify-left hover:cursor-pointer' onClick={() => router.push('/')}>
        {/* <p className="font-extrabold text-xl md:text-3xl md:pr-[10%] text-white">ScienceFair.io</p> */}
        {/* <Image src={Logo} alt='Logo' height={60} /> */}
      </NavbarBrand>
      <NavbarContent className="hidden md:flex gap-6 bg-blac shadow-medium  px-6" justify={'start'}>
        <NavbarItem isActive={(pathname == '/' || pathname.includes('idea') ) && true}>
          <Link className="text-white relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href="/" aria-current={pathname == '/' && 'page'}>
            Home
          </Link>
        </NavbarItem>
        
        <NavbarItem isActive={pathname == '/optimizers' && true}>
          <Link className="text-white relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href="/optimizers" aria-current={pathname == '/optimizers' && 'page'}>
            Optimizers
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname == '/pathways' && true}>
          <Link className="text-white relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href="/pathways" aria-current={pathname == '/pathways' && 'page'}>
            Pathways
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname == '/nightshade' && true}>
          <Link className="text-white relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href="/nightshade" aria-current={pathname == '/nightshade' && 'page'}>
            Nightshade
          </Link>
        </NavbarItem>
        {/* <NavbarItem>
          <Link className="text-white relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href="/guide">
            API
          </Link>
        </NavbarItem> */}
      </NavbarContent>
      {/* <NavbarContent justify="end" className='hidden md:flex'>
        <NavbarItem className="hidden md:flex gap-x-4 px-6">
        <Button as={Link} href="#" className='bg-white text-black rounded-full'>
            Donate
          </Button>
          <Button as={Link} href="#" className='bg-white text-black rounded-full'>
            Login
          </Button>
        </NavbarItem>
      </NavbarContent> */}
    </Navbar>
  )
}