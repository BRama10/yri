import { FairData } from "@/app/meta";
import { Card, CardBody } from "@nextui-org/react";
import { Bar } from "./bar";

export const FairNode: React.FC<FairData> = ({
    node,
    num_finalists,
    diff,
    pred_diff,
    sectors,
    breakdown,
    handleHover,
    handleClick,
}) => {
    return <Card className='bg-[#1F107C]/40 w-full h-fit'>
        <CardBody className='p-4 w-full h-full flex flex-row gap-x-3'>
            {/* <div className='h-full w-1/5 flex flex-col gap-y-6 relative'>
                <Bar />
            </div> */}
            
            <div className='w-1/5 min-h-full flex-grow flex flex-col'>
                <Bar />
            </div>
            <div className='w-4/5 flex flex-col gap-y-6'>
                <div className='text-2xl text-white font-bold max-w-[90%] text-wrap'>{node.title}</div>
                <div className='text-xl text-white font-semibold'>{node.code}</div>
                <div className='flex flex-col'>
                    <div className='text-xl text-white underline font-semibold'>{node.email}</div>
                    <div className='text-xl text-white font-semibold'>Website</div>
                </div>
            </div>
        </CardBody> 
    </Card>
}