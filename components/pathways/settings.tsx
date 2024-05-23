import { Button } from "@nextui-org/react"

import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownSection,
    DropdownItem
  } from "@nextui-org/dropdown";

import Arrows from '@/svgs/dropdown_arrows.svg'


export const Settings = () => {
    
    return <div className='h-full w-[15%] bg-[#191b1f] flex flex-col border-l-1 border-[rgba(153, 153, 153, 0.5)] p-6'>
        <p className='text-xl font-medium pb-3'>Model</p>
        <Dropdown placement="bottom-end">
            <DropdownTrigger>
                <Button color="default" variant="bordered" className='hover:bg-[#262626] hover:text-foreground-50 text-white' 
                endContent={<Arrows />}>
                    titylize-v0
                </Button> 
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="title_0">titylize-v0</DropdownItem>
                <DropdownItem key="abstract_0">abstractify-v0</DropdownItem>
                <DropdownItem key="title_1">titylize-v1</DropdownItem>
                <DropdownItem key="abstract_1">abstractify-v1</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    </div>
}