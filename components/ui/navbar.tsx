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
            DISCOVER
          </Link>
        </NavbarItem>
        
        <NavbarItem isActive={pathname == '/findafair' && true}>
          <Link className="text-white relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href="/findafair" aria-current={pathname == '/findafair' && 'page'}>
            FIND A FAIR
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname == '/judge' && true}>
          <Link className="text-white relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href="/judge" aria-current={pathname == '/judge' && 'page'}>
            AI Judge
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href="https://rishabacademy.com/stem">
            COACHING
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href="/guide">
            GUIDE
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className='hidden md:flex'>
        <NavbarItem className="hidden md:flex gap-x-4 px-6">
        <Button as={Link} href="#" className='bg-white text-black rounded-full'>
            Login
          </Button>
          <Button as={Link} href="#" className='bg-white text-black rounded-full'>
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}