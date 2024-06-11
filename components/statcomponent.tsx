import { Card, CardBody } from "@nextui-org/react";

export interface StatTypes {
    _key: string;
    header?: string;
    value: string | number;
}

export const StatComponent: React.FC<StatTypes> = ({
    _key,
    header='',
    value
}) => {
    return <Card className='bg-[#1F107C]/40 w-full h-fit'>
        <CardBody className='py-8 w-full h-full flex flex-row px-6'>
            <div className='text-xl font-semibold text-white'>{_key} <span className='text-base'>{header}</span></div>
            <div className='flex-grow'></div>
            <div className='text-xl font-semibold text-white'>{value}</div>
        </CardBody>
    </Card>
}