/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { Accordion, AccordionItem, Button } from "@nextui-org/react"

import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownSection,
    DropdownItem
} from "@nextui-org/dropdown";

import { ChevronsUpDown } from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";
import { entitle_v0_definition, entitle_v1_definition, catalyze_v0_definition, abstractify_v0_definition, abstractify_v1_definition, abstractify_v2_definition } from "@/meta/model_definitions";

interface SettingsInterface {
    exportModel: (a: string) => void
}

export const Settings: React.FC<SettingsInterface> = ({
    exportModel
}) => {
    const [selectedModels, setSelectedModels] = useState(new Set(["Title Optimizer"]));

    const selectedModel = useMemo(
        () => Array.from(selectedModels).join(", ").replaceAll("_", " "),
        [selectedModels]
    );

    useEffect(() => {
        let x;
        if (selectedModel == 'Category Chooser') {
            x='catalyze-v0'
        } else if (selectedModel == 'Title Optimizer') {
            x='entitle-v1'
        } else {
            x='abstractify-v2'
        }
        console.log(`Selected Model @ ${selectedModel}`)
        exportModel(x)
    }, [selectedModel])

    const models = [entitle_v1_definition, catalyze_v0_definition, abstractify_v2_definition]

    return <div className='h-full w-[20%] bg-inherit flex flex-col border-l-1 border-[rgba(153, 153, 153, 0.5)] p-6'>
        <p className='text-xl font-medium pb-3'>Coach</p>
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
               
                <DropdownItem key="Category Chooser">Category Chooser</DropdownItem>
                <DropdownItem key="Title Optimizer">Title Optimizer</DropdownItem>
                <DropdownItem key="Abstractify">Abstractify</DropdownItem>

            </DropdownMenu>
        </Dropdown>
        <div className='h-[34px]' />
        <p className='text-xl font-medium pb-3'>Descriptions</p>
        <Accordion isCompact variant={'shadow'}>
            {models.map((model, index) => {
                return <AccordionItem key={index} aria-label="Accordion" title={`${model.getSuperName()}`} classNames={{
                    title: 'text-lg font-semibold'
                }}>
                    <p className='text-sm'>{model.getInstructions()}</p>
                </AccordionItem>
            })}
        </Accordion>
    </div>
}