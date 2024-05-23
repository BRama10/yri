'use client';

import { Button } from "@nextui-org/react"

import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownSection,
    DropdownItem
} from "@nextui-org/dropdown";

import { ChevronsUpDown } from "lucide-react";
import { useMemo, useState } from "react";



export const Settings = () => {
    const [selectedModels, setSelectedModels] = useState(new Set(["titylize-v1"]));

    const selectedModel = useMemo(
        () => Array.from(selectedModels).join(", ").replaceAll("_", " "),
        [selectedModels]
    );

    return <div className='h-full w-[15%] bg-inherit flex flex-col border-l-1 border-[rgba(153, 153, 153, 0.5)] p-6'>
        <p className='text-xl font-medium pb-3'>Model</p>
        <Dropdown placement="bottom-end">
            <DropdownTrigger>
                <Button color="default" variant="bordered" className='hover:bg-[#262626] text-white border-white/60'
                    endContent={<ChevronsUpDown />}>
                    {selectedModel}
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat" className='bg-black rounded-lg'
                selectionMode="single"
                selectedKeys={selectedModels}
                //@ts-ignore
                onSelectionChange={setSelectedModels}
            >
                <DropdownItem key="titylize-v0">titylize-v0</DropdownItem>
                <DropdownItem key="abstractify-v0">abstractify-v0</DropdownItem>
                <DropdownItem key="titylize-v1">titylize-v1</DropdownItem>
                <DropdownItem key="abstractify-v1">abstractify-v1</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    </div>
}