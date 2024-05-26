'use client'

import { Textarea } from "@nextui-org/react";
import type { } from 'ldrs'

interface EntitleProps {
    load: boolean;
    main_title: string | null;
    alternate_titles: string[] | null;
}

export const EntitleBox: React.FC<EntitleProps> = ({
    load,
    main_title,
    alternate_titles
}) => {
    let titles: string[] = [];

    if (alternate_titles && main_title) {
        titles = [...alternate_titles, main_title]
    }

    const bgColors = ['#C926EB', '#5526EB', '#26B0EB', '#63EB26', '#F17F25']


    return (
        <div className="group border-b-1 border-[rgba(153, 153, 153, 0.5)]" data-row-key="message_first">
            <div className="flex w-full flex-col content-start lg:flex-row lg:hover:bg-[#262626]">
                <div className="flex justify-between p-2 lg:p-4">
                    <button className="inline-flex items-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 mr-2 min-w-[85px] justify-start bg-none px-2 py-1 text-lg uppercase lg:min-w-[100px] lg:px-4 lg:py-2 lg:hover:bg-accent lg:group-hover:bg-accent">
                        nightshade
                    </button>
                </div>
                <div className="flex flex-1 cursor-text items-center p-1 lg:items-start lg:p-4">
                    {load ?
                        <l-spiral
                            size="40"
                            speed="1.1"
                            color="green"
                        ></l-spiral>
                        :
                        <div className='w-full h-full flex flex-col gap-y-6'>
                            <p className='max-w-full text-wrap text-lg'>Sure! Here&apos;s a list of {titles.length} optimized titles that fit your current idea.</p>
                            {titles.map((title, index) => (
                                <div key={index} className='w-full py-4 flex flex-row items-center gap-x-4'>
                                    <div className='border border-lg border-white p-2 font-semibold' style={{backgroundColor: bgColors[index]}}>{index+1}.</div>{' '}
                                    <div className='text-wrap max-w-4/5'>{title}</div>
                                </div>
                            ))}
                        </div>}
                </div>
            </div>
            <div
                data-orientation="horizontal"
                role="none"
                className="shrink-0 bg-border h-[1px] w-full"
            ></div>
        </div>
    );
};
