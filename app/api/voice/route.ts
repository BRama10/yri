import { NextResponse } from 'next/server'
import { createClient } from '@deepgram/sdk'

const deepgram = createClient(
    '5b4995f9f32237a104d26d7011108ef79180d4e1'
)

const getAudioBuffer = async (response: ReadableStream) => {
    const reader = response.getReader();
    const chunks = [];

    while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        chunks.push(value);
    }

    const dataArray = chunks.reduce(
        (acc, chunk) => Uint8Array.from([...acc, ...chunk]),
        new Uint8Array(0)
    );

    return Buffer.from(dataArray.buffer);
};

export async function POST(request: Request) {
    try {
        const { text, model } = await request.json()

        const response = await deepgram.speak.request({ text }, { model })
        const stream = await response.getStream()

        const body = await getAudioBuffer(stream!);

        return new NextResponse(body, {
            headers: {
                'Content-Type': 'audio/mp3',
            },
        })
    } catch (err) {
        console.error(err)
        return new NextResponse('Internal Server Error', { status: 500 })
    }
}