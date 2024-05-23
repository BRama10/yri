'use client';

import { QueryBox } from "./querybox"
import { AIBox } from "./aibox";

import type { } from 'ldrs'

import { spiral } from 'ldrs'
import { useEffect, useState } from "react";

export const Interface = () => {
    const [queryBoxes, setQueryBoxes] = useState([<QueryBox key={0} />]);
    
    const handleSubmit = () => {
        setQueryBoxes((prevState) => [...prevState, <AIBox key={queryBoxes.length} />]);
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const isCtrlEnter =
                event.ctrlKey && event.key === 'Enter'; // Ctrl + Enter
            const isMetaEnter =
                event.metaKey && event.key === 'Enter'; // Command + Enter (Mac)

            if (isCtrlEnter || isMetaEnter) {
                // Call the function to handle the button press
                handleSubmit();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        // Clean up the event listener on component unmount
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return <div className='h-full w-[70%] bg-inherit flex flex-col '>
        <div className='h-[90%] w-full flex flex-col max-h-[90%] overflow-y-scroll'>
            {queryBoxes}
        </div>
        <div className='h-[10%] w-full border-t-1 border-[rgba(153, 153, 153, 0.5)] flex flex-row-reverse items-center pr-8 gap-x-10'>
            <button className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-[#fff] hover:bg-slate-200 h-10 px-4 py-2 flex gap-3 text-[#1f1f1f]"><div>Submit</div><div className="hidden md:flex gap-1 font-xs opacity-50 items-center">Ctrl<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus "><path d="M5 12h14"></path><path d="M12 5v14"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-corner-down-left "><polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path></svg></div></button>
            <button className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-input border-gray-500 bg-background hover:bg-[#262626] hover:text-[#f8f8f7] h-10 px-4 py-2 hidden md:inline-block">View code</button>
            <l-spiral
                size="40"
                speed="1.1"
                color="green"
            ></l-spiral>
        </div>
    </div>
}