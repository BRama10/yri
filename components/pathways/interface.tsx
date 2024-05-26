"use client";

import { QueryBox } from "./querybox";
import { EntitleBox } from "./aiboxes/entitle";

import { useEffect, useState } from "react";
import Model from "@/meta/model_definitions";

import axios from "axios";
import { CatalyzeBox } from "./aiboxes/catalyze";

import { } from 'ldrs';

interface InterfaceProps {
    secureHandler: (
        request: (data: string, key: string) => Promise<void>,
        d: string
    ) => Promise<void>;
    model: Model;
}

export const Interface: React.FC<InterfaceProps> = ({
    secureHandler,
    model,
}) => {
    const [generationTime, setGenerationTime] = useState<number | null>(0);

    const _exitHandler = (idToDelete: number) => {
        setQueryBoxes((prevQueryBoxes) =>
            prevQueryBoxes.filter((queryBox) => queryBox.id !== idToDelete)
        );
    };

    const _textHandler = (text: string, idToModify: number) => {
        setQueries((prevQueries) =>
            prevQueries.map((query) =>
                query.id === idToModify ? { ...query, text: text } : query
            )
        );
    };

    const [queryBoxes, setQueryBoxes] = useState([
        { id: 0, element: <QueryBox key={0} id_={0} textHandler={_textHandler} /> },
    ]);

    const [queries, setQueries] = useState([{ id: 0, text: "" }]);

    useEffect(() => {
        console.log(queries);
    }, [queries]);

    const handleSubmit = async () => {
        // setQueryBoxes((prevState) => [...prevState, <AIBox key={queryBoxes.length} />]);
        const method = async (data: string, key: string) => {
            // const fetchUrl = `https://myapp-6thbpbsd7q-uk.a.run.app/models/${model.getVersion()}/${model.getName().toLowerCase()}?api_key=${key}`;
            const fetchUrl = `http://localhost:8000/models/${model.getVersion()}/${model
                .getName()
                .toLowerCase()}?api_key=${key}`;
            console.log(fetchUrl);

            setGenerationTime(null)

            if (model.getName().toLowerCase() == "entitle") {
                setQueryBoxes((prevState) => [
                    ...prevState,
                    {
                        id: prevState.length,
                        element: (
                            <EntitleBox
                                load={true}
                                main_title={null}
                                alternate_titles={null}
                                key={prevState.length}
                            />
                        ),
                    },
                ]);
            } else if (model.getName().toLowerCase() == "catalyze") {
                setQueryBoxes((prevState) => [
                    ...prevState,
                    {
                        id: prevState.length,
                        element: (
                            <CatalyzeBox
                                key={prevState.length}
                                load={true}
                                category_1={null}
                                category_2={null}
                                category_3={null}
                            />
                        ),
                    },
                ]);
            }
            
            console.log('data', data)

            const response = await axios.post(fetchUrl, {
                payload: data,
            });

            setGenerationTime(response.data.elapsed_time)

            if (model.getName().toLowerCase() == "entitle") {
                setQueryBoxes((prevState) => [
                    ...prevState.slice(0, prevState.length - 1),
                    {
                        id: prevState.length - 1,
                        element: (
                            <EntitleBox
                                key={prevState.length - 1}
                                load={false}
                                main_title={response.data.optimized_title}
                                alternate_titles={response.data.partial_responses}
                            />
                        ),
                    },
                ]);
            } else if (model.getName().toLowerCase() == "catalyze") {
                console.log(response.data);
                const dataArray = Object.entries(response.data.category_breakdown).map(
                    ([key, value]) => ({ key, value })
                );
                dataArray.sort((a: any, b: any) => b.value - a.value);

                const category_1 = { [dataArray[0].key]: dataArray[0].value as number };
                const category_2 = { [dataArray[1].key]: dataArray[1].value as number };
                const category_3 = { [dataArray[2].key]: dataArray[2].value as number };

                setQueryBoxes((prevState) => [
                    ...prevState.slice(0, prevState.length - 1),
                    {
                        id: prevState.length - 1,
                        element: (
                            <CatalyzeBox
                                key={`sdasd${prevState.length - 1}`}
                                load={false}
                                category_1={category_1}
                                category_2={category_2}
                                category_3={category_3}
                            />
                        ),
                    },
                ]);
            }

            setQueryBoxes((prevState) => {
                setQueries((prevState1) => {
                    return [...prevState1, { id: prevState.length, text: "" }];
                });

                return [
                    ...prevState,
                    {
                        id: prevState.length,
                        element: (
                            <QueryBox
                                key={prevState.length}
                                id_={prevState.length}
                                textHandler={_textHandler}
                            />
                        ),
                    },
                ];
            });
        };

        const updatedQueries = await new Promise<any[]>((resolve) => {
            setQueries((prevState: any) => {
                resolve(prevState);
                return prevState;
            });
        });

        await secureHandler(method, updatedQueries[updatedQueries.length - 1].text);
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const isCtrlEnter = event.ctrlKey && event.key === "Enter"; // Ctrl + Enter
            const isMetaEnter = event.metaKey && event.key === "Enter"; // Command + Enter (Mac)

            if (isCtrlEnter || isMetaEnter) {
                // Call the function to handle the button press
                handleSubmit();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        // Clean up the event listener on component unmount
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="h-full w-[70%] bg-inherit flex flex-col">
            <div className="h-[90%] w-full flex flex-col max-h-[92%] overflow-y-auto">
                {queryBoxes.map((query) => query.element)}
            </div>
            <div className="h-[10%] w-full border-t-1 border-[rgba(153, 153, 153, 0.5)] flex flex-row-reverse items-center pr-8 gap-x-10">
                <button
                    onClick={() => handleSubmit()}
                    className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-[#fff] hover:bg-slate-200 h-10 px-4 py-2 flex gap-3 text-[#1f1f1f]"
                >
                    <div>Submit</div>
                    <div className="hidden md:flex gap-1 font-xs opacity-50 items-center">
                        Ctrl
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="10"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-plus "
                        >
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="10"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-corner-down-left "
                        >
                            <polyline points="9 10 4 15 9 20"></polyline>
                            <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
                        </svg>
                    </div>
                </button>
                <button className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-input border-gray-500 bg-background hover:bg-[#262626] hover:text-[#f8f8f7] h-10 px-4 py-2 hidden md:inline-block">
                    View code
                </button>
                <a
                    data-state="closed"
                    className="hover:text-primaryaccent text-muted-accent opacity-50 hover:opacity-100"
                >
                    <div className="mr-8 flex flex-col  italic  lg:flex-row items-center">
                        <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 self-center text-[12px] lg:text-xs flex items-center gap-x-2">
                            Generation: {generationTime != null && generationTime != 0 ?
                                <span>{generationTime}</span>
                                :<>{'  '}
                                <l-ring
                                    size="20"
                                    stroke="3"
                                    bg-opacity="0"
                                    speed="2"
                                    color="white"
                                ></l-ring>{'  '}</>
                            } ms
                        </label>
                        <div className="hidden px-2 lg:flex justify-center items-center">
                            <svg
                                width="23"
                                height="28"
                                viewBox="0 0 23 28"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="stroke-primaryaccent"
                            >
                                <g clipPath="url(#clip0_826_719)">
                                    <path
                                        d="M14.3775 4.11917L4.84942 14.0653L10.7439 15.5758L8.10313 23.1576L17.6312 13.2114L11.7368 11.701L14.3775 4.11917Z"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_826_719">
                                        <rect
                                            width="16.2264"
                                            height="24"
                                            fill="white"
                                            transform="translate(6.35938) rotate(14.3725)"
                                        ></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};
