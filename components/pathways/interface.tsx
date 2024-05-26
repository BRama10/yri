'use client';

import { QueryBox } from "./querybox"
import { EntitleBox } from "./aiboxes/entitle";

import { useEffect, useState } from "react";
import Model from "@/meta/model_definitions";

import axios from 'axios';
import { CatalyzeBox } from "./aiboxes/catalyze";

interface InterfaceProps {
    secureHandler: (request: (data: string, key: string) => Promise<void>, d: string) => Promise<void>
    model: Model
}

export const Interface: React.FC<InterfaceProps> = ({
    secureHandler,
    model
}) => {
    const _exitHandler = (idToDelete: number) => {
        setQueryBoxes(prevQueryBoxes => prevQueryBoxes.filter(queryBox => queryBox.id !== idToDelete));
    }

    const _textHandler = (text: string, idToModify: number) => {
        setQueries(prevQueries =>
            prevQueries.map(query =>
                query.id === idToModify ? { ...query, text: text } : query
            )
        );
    }

    const [queryBoxes, setQueryBoxes] = useState([
        { id: 0, element: <QueryBox key={0} id_={0} textHandler={_textHandler} /> }
    ]);

    const [queries, setQueries] = useState([
        { id: 0, text: '' }
    ])

    useEffect(() => {
        console.log(queries)
    }, [queries])

    const handleSubmit = async () => {
        // setQueryBoxes((prevState) => [...prevState, <AIBox key={queryBoxes.length} />]);
        const method = async (data: string, key: string) => {
            // const fetchUrl = `https://myapp-6thbpbsd7q-uk.a.run.app/models/${model.getVersion()}/${model.getName().toLowerCase()}?api_key=${key}`;
            const fetchUrl = `http://localhost:8000/models/${model.getVersion()}/${model.getName().toLowerCase()}?api_key=${key}`;
            console.log(fetchUrl);
            if (model.getName().toLowerCase() == 'entitle') {
                setQueryBoxes((prevState) => [...prevState, {
                    id: prevState.length,
                    element: <EntitleBox load={true} main_title={null} alternate_titles={null} key={prevState.length} />
                }])
            } else if (model.getName().toLowerCase() == 'catalyze') {
                setQueryBoxes((prevState) => [...prevState, {
                    id: prevState.length,
                    element: <CatalyzeBox key={prevState.length} load={true} category_1={null} category_2={null} category_3={null} />
                }])
            }

            const response = await axios.post(fetchUrl, {
                payload: data
            });

            if (model.getName().toLowerCase() == 'entitle') {
                setQueryBoxes((prevState) => [...prevState.slice(0, prevState.length - 1), {
                    id: prevState.length - 1,
                    element: <EntitleBox key={prevState.length - 1} load={false} main_title={response.data.optimized_title} alternate_titles={response.data.partial_responses} />
                }])
            } else if (model.getName().toLowerCase() == 'catalyze') {
                console.log(response.data)
                const dataArray = Object.entries(response.data.category_breakdown).map(([key, value]) => ({ key, value }));
                dataArray.sort((a: any, b: any) => b.value - a.value);

                const category_1 = { [dataArray[0].key]: dataArray[0].value as number };
                const category_2 = { [dataArray[1].key]: dataArray[1].value as number };
                const category_3 = { [dataArray[2].key]: dataArray[2].value as number };


                setQueryBoxes((prevState) => [...prevState.slice(0, prevState.length - 1), {
                    id: prevState.length - 1,
                    element: <CatalyzeBox key={`sdasd${prevState.length - 1}`} load={false} category_1={category_1} category_2={category_2} category_3={category_3} />
                }])
            }

            setQueryBoxes((prevState) => {

                setQueries((prevState1) => {
                    return [...prevState1, { id: prevState.length, text: '' }]
                })

                return [...prevState, {
                    id: prevState.length,
                    element: <QueryBox key={prevState.length} id_={prevState.length} textHandler={_textHandler} />
                }]
            })


        }

        await secureHandler(method, queries[queries.length - 1].text)
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <div className='h-full w-[70%] bg-inherit flex flex-col'>
        <div className='h-[90%] w-full flex flex-col max-h-[92%] overflow-y-auto'>
            {queryBoxes.map(query => query.element)}
        </div>
        <div className='h-[10%] w-full border-t-1 border-[rgba(153, 153, 153, 0.5)] flex flex-row-reverse items-center pr-8 gap-x-10'>
            <button onClick={() => handleSubmit()}
                className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-[#fff] hover:bg-slate-200 h-10 px-4 py-2 flex gap-3 text-[#1f1f1f]"><div>Submit</div><div className="hidden md:flex gap-1 font-xs opacity-50 items-center">Ctrl<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus "><path d="M5 12h14"></path><path d="M12 5v14"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-corner-down-left "><polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path></svg></div></button>
            <button className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-input border-gray-500 bg-background hover:bg-[#262626] hover:text-[#f8f8f7] h-10 px-4 py-2 hidden md:inline-block">View code</button>
        </div>
    </div>
}