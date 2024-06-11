'use client';

import { ChartProps } from "@/app/meta";
import { Card, CardBody, Divider } from "@nextui-org/react";
import { reduceArraysByBreakdown } from "./chart";
import { useEffect, useState } from "react";
import React from "react";

export const Menu: React.FC<ChartProps> = ({
    label_list = ['No Finalist Data'],
    breakdown = [1],
}) => {
    // const [data, setData] = useState<any>({
    //     reducedLabelList: [],
    //     reducedBreakdown: [],
    //     reducedBackgroundColor: [],
    //     });
    let data = {
            reducedLabelList: [] as any[],
            reducedBreakdown: [] as any[],
            reducedBackgroundColor: [] as any[],
            }

    data = reduceArraysByBreakdown(label_list, breakdown, [
            '#E57373', '#F06292', '#9575CD', '#64B5F6', '#4FC3F7',
            '#4DB6AC', '#81C784', '#DCE775', '#FFF176', '#FFD54F',
            '#FFB74D', '#FF8A65', '#A1887F', '#90A4AE', '#9E9E9E',
            '#78909C', '#455A64', '#F48FB1', '#CE93D8', '#FFAB91',
            '#AED581', '#FFCC80', '#FFD180', '#FFB380', '#90CAF9'
        ])


    return <Card className='bg-[#1F107C]/40 w-full h-full p-4 overflow-y-auto'>
        <CardBody className='grid grid-cols-3 gap-4'>
            <p className='text-ghostWhite text-lg font-bold'>Color</p>
            <p className='text-ghostWhite text-lg font-bold'>Category</p>
            <p className='text-ghostWhite text-lg font-bold'>Number</p>
            <Divider className='col-span-3 h-[3px] bg-white'></Divider>
            {Array.from({ length: data.reducedBreakdown.length }, (_, index) => (
                <React.Fragment key={index}>
                    <div className='w-full h-full flex items-center justify-start pl-4'>
                        <div className='w-1/4 aspect-square' style={{
                            backgroundColor: data.reducedBackgroundColor[index]
                        }} />
                    </div>
                    <p className='text-ghostWhite text-md font-bold'>{data.reducedLabelList[index]}</p>
                    <p className='text-ghostWhite text-md font-bold'>{data.reducedBreakdown[index]}</p>
                </React.Fragment>
            ))}
        </CardBody>

    </Card>
}