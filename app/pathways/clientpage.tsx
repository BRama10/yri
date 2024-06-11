'use client';

import { USAMapSelect } from '@/components/map'
import { Card, CardBody, Input } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ClientPage({ countyData, fairData }: { countyData: { [key: string]: string[] }; fairData: any }) {
    const [hoverState, setHoverState] = useState<string | null>(null);
    const [state, setState] = useState<string | null>(null);
    const [county, setCounty] = useState<string | null>(null);
    const [countyFilter, setCountyFilter] = useState<string>('');

    const router = useRouter();

    const handleClick = (event: any) => {
        setState(event.currentTarget.getAttribute('name'));
    };

    const handleMouseEnter = (event: any) => {
        setHoverState(event.currentTarget.getAttribute('name'));
    };

    const handleMouseLeave = () => { };

    useEffect(() => {
        console.log(countyData);
    }, [countyFilter])

    return (
        <main className='w-screen max-w-screen h-[80%] min-h-[80%] max-h-[80%] flex flex-col bg-black z-[50] relative'>
            <p className='text-4xl text-white font-bold w-full text-center pb-6 pt-6'>PROJECT PATHWAYS</p>
            <p className='text-xl text-white text-center w-full pb-3'>The <span className='font-medium'>most comprehensive tool</span> for the International Science and Engineering Fair available on the internet.</p>
            <p className='text-xl text-white text-center w-full pb-6'>Simply choose your state and we’ll deliver an arsenal of data-derived statistics and heuristics that will guide you throughout your research journey.</p>
            <div className='flex flex-row w-full h-3/4'>
                <div className='w-1/2 h-full flex flex-col px-4'>
                    <div className='flex flex-row w-full justify-around px-6'>
                        <Card className='text-white text-2xl p-4 bg-background/60 text-center' isBlurred>Hovering on <span className='font-semibold'>{hoverState ? hoverState : 'None'}</span></Card>
                        <Card className='text-white text-2xl p-4 bg-background/60 text-center' isBlurred>Selected <span className='font-semibold'>{state ? state : 'Select State'}</span></Card>
                    </div>
                    <USAMapSelect
                        onClick={handleClick}
                        onUSAStateMouseEnter={handleMouseEnter}
                        onUSAStateMouseLeave={handleMouseLeave}
                        showStateNameOnHover={false}
                        USAStateOnHoverColor="pink"
                        USAStateOnHoverStrokeColor="white"
                        wrapperClassName='text-white'
                    />
                </div>
                <div className='w-1/2 h-full max-h-full p-4 !pt-0'>
                <Input className='h-[10%]' type="input" label={state ? "Filter By County" : 'Select A State'} value={countyFilter} onValueChange={setCountyFilter} disabled={state == null} classNames={{
                            inputWrapper: 'bg-[#272626] text-white data-[hover=true]:bg-[##111111] group-data-[focus=true]:bg-[##111111]',
                            input: '!text-white',
                            label: 'text-white',
                            base: state == null ? 'opacity-30' : ''
                        }} />
                    <Card className='w-full h-full flex p-4 !pt-0 bg-[black]  max-w-full flex-wrap max-h-[90%] border-rose-600 shadow-2xl' isBlurred>
                        <CardBody className='w-full h-[90%] flex p-4 bg-inherit rounded-md max-w-full flex-wrap flex-row !max-h-full !overflow-y-scroll gap-y-3 gap-x-3 justify-center'>
                            {state && countyData[state].filter(c=> c.toLowerCase().includes(countyFilter)).map((c, index) => {
                                let color: string;

                                if (index % 6 == 0) {
                                    color = 'border-rose-600'
                                } else if (index % 5 == 0) {
                                    color = 'border-pink-500'
                                } else if (index % 4 == 0) {
                                    color = 'border-orange-500'
                                } else if (index % 3 == 0) {
                                    color = 'border-green-500'
                                } else if (index % 2 == 0) {
                                    color = 'border-blue-500'
                                } else {
                                    color = 'border-purple-500'
                                }

                                return <motion.div
                                    initial={{x: -100, y: 100}}
                                    animate={{ x: 0, y:0 }}
                                    transition={{ ease: "easeOut", duration: 2 }}
                                    key={index}
                                    className='w-[30%] h-fit'
                                >
                                    <Card isPressable className={`w-full h-full px-2 py-4 bg-[#111010]  ${color} border-1 text-white/80 shadow-xl`} onClick={() => {
                                        router.push(`/pathways?county=${c.replace(/county/gi, '').trim().replace(/\s+/g, '+')}&state=${state.replace(/\s+/g, '+')}`);
                                    }}>
                                        {c}
                                    </Card>
                                </motion.div>
                            })}

                        </CardBody>

                    </Card>
                </div>

            </div>
        </main>
    );
}