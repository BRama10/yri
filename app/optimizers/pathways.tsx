'use client'

import { Sidebar } from "@/components/pathways/sidebar";
import { Settings } from '@/components/pathways/settings'
import { Instruction } from '@/components/pathways/instruction'
import { Interface } from '@/components/pathways/interface'

import Model, { entitle_v0_definition, entitle_v1_definition, assign } from "@/meta/model_definitions";

import { useEffect, useState } from 'react';

interface PathwaysProps {
    keys: string[]
}

export const Pathways: React.FC<PathwaysProps> = ({
    keys
}) => {
    const [model, setModel] = useState<Model>(entitle_v1_definition);
    const [availableKeys, setAvailableKeys] = useState<string[]>([...keys]);

    useEffect(() => {
        console.log(model.getName(), model.getVersion())
    }, [model])

    const useKey = async (request: (data:string, key: string) => Promise<void>, d: string) => {
        if (availableKeys.length > 0) {
            const availableKeysUpdated = await new Promise<any[]>((resolve) => {
                setAvailableKeys((prevState: any) => {
                    resolve(prevState);
                    return prevState;
                });
            });
            const key = availableKeysUpdated[0];
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
        {/* <Sidebar /> */}
        <div className='w-[100vw] h-full bg-inherit flex flex-col'>
            <div className='h-[10%] w-full border-b-1 border-[rgba(153, 153, 153, 0.5)] flex items-center justify-between px-3'>
                <h2 className="p-4 pl-[24px] text-2xl font-medium">Toolshop</h2>
            </div>
            <div className='h-[90%] w-full flex flex-row'>
                <Instruction model={model} />
                <Interface secureHandler={useKey} model_={model} />
                <Settings exportModel={(model: string) => {
                    setModel({ ...{model: assign(model)} }.model)
                }} />
            </div>
        </div>
    </main>
}