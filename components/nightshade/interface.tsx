/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { QueryBox } from "./querybox"
import { AIBox } from "./aibox";
import { useEffect, useRef, useState } from "react";

import axios from 'axios';

import {
    LiveConnectionState,
    LiveTranscriptionEvent,
    LiveTranscriptionEvents,
    useDeepgram,
} from "@/context/AIContext"
import {
    MicrophoneEvents,
    MicrophoneState,
    useMicrophone,
} from "@/context/MicrophoneContext";
import Container from "./container";

import { Circle, Disc, Pause, RectangleHorizontal } from "lucide-react";
import { Button, Switch } from "@nextui-org/react";

interface InterfaceProps {
    secureHandler: (request: (data: string, key: string) => Promise<void>, d: string) => Promise<void>
}

export const Interface: React.FC<InterfaceProps> = ({
    secureHandler,
}) => {
    const { connection, connectToDeepgram, connectionState } = useDeepgram();
    const { setupMicrophone, microphone, startMicrophone, microphoneState, stopMicrophone } = useMicrophone();
    const captionTimeout = useRef<any>();
    const keepAliveInterval = useRef<any>();
    const [allowVoice, setAllowVoice] = useState(false);

    const _textHandler = (text: string, idToModify: number) => {
        setQueries(prevQueries =>
            prevQueries.map(query =>
                query.id === idToModify ? { ...query, text: text } : query
            )
        );

        setTranscribe(['', text])
    }

    const [queryBoxes, setQueryBoxes] = useState([
        { id: 0, element: <QueryBox key={0} id_={0} textHandler={_textHandler} acceptText={null} /> }
    ]);

    const [queries, setQueries] = useState([
        { id: 0, text: '' }
    ])

    const [conversation, setConversation] = useState<any>([])
    const [isSynthesizing, setIsSynthesizing] = useState(false);
    const [currentText, setCurrentText] = useState('');

    function stopAudio() {
        const audioPlayer = document.getElementById("audio-player");
        if (audioPlayer) {
            //@ts-ignore
            audioPlayer.pause();
            //@ts-ignore
            audioPlayer.currentTime = 0;
        }
    }

    function speakText(text: string) {
        setIsSynthesizing(true)

        const modelSelect = 'aura-luna-en';

        const data = {
            model: modelSelect,
            text: text,
        };

        fetch("/api/voice", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                stopAudio();

                return response.blob();
            })
            .then((blob) => {
                // Create an object URL from the Blob
                const audioUrl = URL.createObjectURL(blob);

                // Create an audio element and play the audio URL
                const audioPlayer = document.getElementById("audio-player");

                if (audioPlayer) {
                    //@ts-ignore
                    audioPlayer!.src = audioUrl;
                    //@ts-ignore
                    audioPlayer!.play();
                }

                //@ts-ignore
                audioPlayer.addEventListener("ended", () => {
                    setIsSynthesizing(false);
                });
            })
            .catch((error) => {
                console.error("Error fetching audio:", error);

            });
    }

    const handleSubmit = async () => {
        // setQueryBoxes((prevState) => [...prevState, <AIBox key={queryBoxes.length} />]);
        const method = async (data: string, key: string) => {
            setTranscribe(['']);
            const fetchUrl = `https://myapp-6thbpbsd7q-uk.a.run.app/models/nightshade/generate?api_key=${key}`;
            // const fetchUrl = `http://localhost:8000/models/nightshade/generate?api_key=${key}`;

            setConversation((prevState: any) => {
                return [...prevState, {
                    role: 'user',
                    content: data
                }]
            })

            setQueryBoxes((prevState) => [...prevState, {
                id: prevState.length,
                element: <AIBox load={true} text={''} key={prevState.length} />
            }])

            const updatedConversation = await new Promise<any[]>((resolve) => {
                setConversation((prevState: any) => {
                    resolve(prevState);
                    return prevState;
                });
            });

            const response = await axios.post(fetchUrl, {
                conversation: updatedConversation
            });

            // function splitAndRetainPunctuation(text: string): string[] {
            //     // Split the string using a regex that matches punctuation (periods, exclamation marks, question marks)
            //     const splitText = text.split(/(?<=[.!?])/);
            
            //     // Trim any leading or trailing spaces from each part
            //     return splitText.map(part => part.trim()).filter(part => part !== '');
            // }

            // console.log()

            // for (const phrase of splitAndRetainPunctuation(response.data.response)) {
            //     speakText(phrase)
            //     await new Promise(resolve => setTimeout(resolve, 1500));
            // }

            if (allowVoice)
                speakText(response.data.response)

            setQueryBoxes((prevState) => [...prevState.slice(0, prevState.length - 1), {
                id: prevState.length - 1,
                element: <AIBox load={false} text={response.data.response} key={prevState.length - 1} />
            }])

            setConversation((prevState: any) => {
                return [...prevState, {
                    role: 'assistant',
                    content: response.data.response
                }]
            })

            setQueryBoxes((prevState) => {
                setQueries((prevState1) => {
                    console.log('prevstate', prevState1.length)
                    return [...prevState1, { id: prevState.length, text: '' }]
                })

                return [...prevState, {
                    id: prevState.length,
                    element: <QueryBox key={prevState.length} id_={prevState.length} textHandler={_textHandler} acceptText={null} />
                }]
            })



        }

        const updatedQueries = await new Promise<any[]>((resolve) => {
            setQueries((prevState: any) => {
                resolve(prevState);
                return prevState;
            });
        });

        await secureHandler(method, updatedQueries[updatedQueries.length - 1].text)
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

    const [transcribe, setTranscribe] = useState<Array<string> | null>(['']);

    useEffect(() => {
        if (microphoneState === MicrophoneState.Ready) {
            connectToDeepgram({
                model: "nova-2",
                interim_results: true,
                smart_format: true,
                filler_words: true,
                utterance_end_ms: 3000,
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [microphoneState]);

    useEffect(() => {
        if (!microphone) return;
        if (!connection) return;

        const onData = (e: BlobEvent) => {
            connection?.send(e.data);
        };

        const onTranscript = (data: LiveTranscriptionEvent) => {
            const { is_final: isFinal, speech_final: speechFinal } = data;
            let thisCaption = data.channel.alternatives[0].transcript;

            console.log("thisCaption", thisCaption);
            if (thisCaption !== "" && isFinal && speechFinal) {
                console.log('thisCaption !== ""', thisCaption);
                setTranscribe((prev) => [...prev!, thisCaption]);
            }
        };

        if (connectionState === LiveConnectionState.OPEN) {
            connection.addListener(LiveTranscriptionEvents.Transcript, onTranscript);
            microphone.addEventListener(MicrophoneEvents.DataAvailable, onData);

            startMicrophone();
        }

        return () => {
            // prettier-ignore
            connection.removeListener(LiveTranscriptionEvents.Transcript, onTranscript);
            microphone.removeEventListener(MicrophoneEvents.DataAvailable, onData);
            clearTimeout(captionTimeout.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [connectionState]);

    useEffect(() => {
        if (!connection) return;

        if (
            microphoneState !== MicrophoneState.Open &&
            connectionState === LiveConnectionState.OPEN
        ) {
            connection.keepAlive();

            keepAliveInterval.current = setInterval(() => {
                connection.keepAlive();
            }, 10000);
        } else {
            clearInterval(keepAliveInterval.current);
        }

        return () => {
            clearInterval(keepAliveInterval.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [microphoneState, connectionState]);

    const [listening, setListening] = useState<boolean | null>(null);

    useEffect(() => {
        const lastId = queries[queries.length - 1].id

        setQueryBoxes(prevQueries =>
            prevQueries.map(queryBox =>
                queryBox.id === lastId ? { ...queryBox, element: <QueryBox key={lastId} id_={lastId} textHandler={_textHandler} acceptText={transcribe?.join(' ')!} /> } : queryBox
            )
        );
    }, [transcribe])

    return <div className='h-full w-[85%] bg-inherit flex flex-col  border-[rgba(153, 153, 153, 0.5)] border-r-1'>
        <Container >
            {queryBoxes.map(query => query.element)}
        </Container>
        <div className='h-[10%] w-full border-t-1 border-[rgba(153, 153, 153, 0.5)] flex flex-row-reverse items-center pr-8 gap-x-10'>
            <button onClick={() => handleSubmit()}
                className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-[#fff] hover:bg-slate-200 h-10 px-4 py-2 flex gap-3 text-[#1f1f1f]"><div>Submit</div><div className="hidden md:flex gap-1 font-xs opacity-50 items-center">Ctrl<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus "><path d="M5 12h14"></path><path d="M12 5v14"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-corner-down-left "><polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path></svg></div></button>
            <button className="opacity-0 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-input border-gray-500 bg-background hover:bg-[#262626] hover:text-[#f8f8f7] h-10 px-4 py-2 hidden md:inline-block">View code</button>
            <div className='flex flex-1' />
            <div className='flex w-[16px]' />
            <Switch isSelected={allowVoice} onValueChange={setAllowVoice} color={'success'}>
                Nightshade Voice
            </Switch>
            <div className='flex w-[16px]' />
            {listening ?<div className='flex gap-x-2 items-center justify-center'>
                <p>Disable Nightshade Audio</p><Button className='w-fit h-fit aspect-square bg-white p-4' isIconOnly onClick={async () => {
                    stopMicrophone()
                    setListening(false)
                }}>
                    <Pause color="red" />
                </Button ></div>
                :
                <div className='flex gap-x-2 items-center justify-center'><p>Enable Nightshade Audio</p><Button className='w-fit h-fit aspect-square bg-white p-4' isIconOnly onClick={async () => {
                    if (listening == null) {
                        setupMicrophone();
                    } else {
                        startMicrophone();
                    }
                    
                    setListening(true)
                }}>
                    <Disc color="green" />
                </Button > </div>
            }

            <div className='flex w-[16px]' />
        </div>
        <audio id="audio-player" controls className='hidden'></audio>
    </div>
}