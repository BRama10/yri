'use client'

import { Sidebar } from "@/components/pathways/sidebar";
import { Settings } from '@/components/pathways/settings'
import { Instruction } from '@/components/pathways/instruction'
import { Interface } from '@/components/pathways/interface'

import { useEffect, useState } from 'react';

interface PathwaysProps {
    keys: string[]
}

export const Pathways: React.FC<PathwaysProps> = ({
    keys
}) => {
    const [model, setModel] = useState('');
    const [availableKeys, setAvailableKeys] = useState<string[]>([...keys]);

    const useKey= () => {
        if (availableKeys.length > 0) {
            const key = availableKeys[0];
        } else {
            window.alert('Max Requests Reached. Please reload page!')
        }
        
    }


    return <main className='bg-[#121418] text-[#f8f8f7] w-full overflow-hidden z-[60] relative flex flex-row' style={{
        height: 'calc(100vh - 4rem)'
    }}>
        <Sidebar />
        <div className='w-[85vw] h-full bg-inherit flex flex-col'>
            <div className='h-[10%] w-full border-b-1 border-[rgba(153, 153, 153, 0.5)] flex items-center justify-between px-3'>
                <h2 className="p-4 pl-[24px] text-2xl font-medium">Toolshop</h2>
            </div>
            <div className='h-[90%] w-full flex flex-row'>
                <Instruction />
                <Interface />
                <Settings exportModel={(model: string) => setModel(model)} />
            </div>
        </div>
    </main>
}