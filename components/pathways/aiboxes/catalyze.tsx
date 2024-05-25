'use client'

import { Progress, Textarea } from "@nextui-org/react";
import type { } from 'ldrs'

interface CatalyzeProps {
    category_1: Record<string, number> | null;
    category_2: Record<string, number> | null;
    category_3: Record<string, number> | null;
    load: boolean;
}

export const CatalyzeBox: React.FC<CatalyzeProps> = ({
    category_1,
    category_2,
    category_3,
    load
}) => {

    const parseRecord = (record: Record<string, number>) => {
        let key_;
        let value_;

        const entries = Object.entries(record);
        if (entries.length > 0) {
            const [key, value] = entries[0];
            key_ = key;
            value_ = value;
        }

        return [key_, value_]
    }

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
                            <p className='max-w-full text-wrap text-lg'>All right! Here&apos;s the breakdown of the top <b>3</b> categories that your project fits into. Categories with higher percentages align more closely with your project.</p>

                            <Progress
                                label={parseRecord(category_1!)[0] as string}
                                size="md"
                                value={parseRecord(category_1!)[1] as number}
                                maxValue={100}
                                color="success"
                                showValueLabel={true}
                                className="max-w-[90%] w-[90%]"
                            />

                            <Progress
                                label={parseRecord(category_2!)[0] as string}
                                size="md"
                                value={parseRecord(category_2!)[1] as number}
                                maxValue={100}
                                color="warning"
                                showValueLabel={true}
                                className="max-w-[90%] w-[90%]"
                            />

                            <Progress
                                label={parseRecord(category_3!)[0] as string}
                                size="md"
                                value={parseRecord(category_3!)[1] as number}
                                maxValue={100}
                                color="danger"
                                showValueLabel={true}
                                className="max-w-[90%] w-[90%]"
                            />
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
