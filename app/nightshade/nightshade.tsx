'use client'

import { Sidebar } from "@/components/nightshade/sidebar";
import { Settings } from '@/components/nightshade/settings'
import { Instruction } from '@/components/nightshade/instruction'
import { Interface } from '@/components/nightshade/interface'

import { useEffect, useState } from 'react';

interface NightshadeProps {
    keys: string[]
}

export const Nightshade: React.FC<NightshadeProps> = ({
    keys
}) => {
    const [availableKeys, setAvailableKeys] = useState<string[]>([...keys]);

    const useKey = async (request: (data:string, key: string) => Promise<void>, d: string) => {
        if (availableKeys.length > 0) {
            const key = availableKeys[0];
            setAvailableKeys((prevState) => prevState.slice(1))
            await request(d, key)
        } else {
            window.alert('Max Requests Reached. Please reload page!')
            return
        }    
    }


    return <main className='bg-[#121418] text-[#f8f8f7] w-full overflow-hidden z-[60] relative flex flex-row' style={{
        height: 'calc(100vh - 4rem)'
    }}>
        <Sidebar />
        <div className='w-[88vw] h-full bg-inherit flex flex-col'>
            <div className='h-[10%] w-full border-b-1 border-[rgba(153, 153, 153, 0.5)] flex items-center justify-between px-3'>
                <h2 className="p-4 pl-[24px] text-2xl font-medium">Toolshop</h2>
            </div>
            <div className='h-[90%] w-full flex flex-row'>
                <Instruction />
                <Interface secureHandler={useKey} />
                <Settings exportPresets={() => null} />
            </div>
        </div>
    </main>
}