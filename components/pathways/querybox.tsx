'use client'

import { Textarea } from "@nextui-org/react";
import { useEffect, useState } from "react";

interface QueryBoxProps {
  id_: number;
  textHandler: (text: string, id: number) => void;
  // exitHandler: (id: number) => void;
}

export const QueryBox: React.FC<QueryBoxProps> = ({
  id_,
  textHandler,
}) => {
  const [text, setText] = useState('')

  useEffect(() => {
    textHandler(text, id_)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text])

  return (
    <div className="group border-b-1 border-[rgba(153, 153, 153, 0.5)]" data-row-key="message_first">
      <div className="flex w-full flex-col content-start lg:flex-row hover:bg-[#262626] group-focus:bg-[#262626]">
        <div className="flex justify-between p-2 lg:p-4">
          <button className="inline-flex items-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 mr-2 min-w-[85px] justify-start bg-none px-2 py-1 text-lg uppercase lg:min-w-[100px] lg:px-4 lg:py-2 lg:hover:bg-accent lg:group-hover:bg-accent">
            user
          </button>
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 py-2 ml-2 px-2 lg:h-10 lg:px-4 lg:hidden z-[80]"
            title="Delete message (press '-')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-minus-circle "
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8 12h8"></path>
            </svg>
          </button>
        </div>
        <div className="flex flex-1 cursor-text items-center p-1 lg:items-start lg:p-4">
          <Textarea
            className="h-auto flex w-full"
            id="message_input_first"
            minRows={1}
            placeholder="Enter your abstract/information to let our tools fix for you!"
            classNames={{
                base: 'bg-inherit',
                input: 'bg-inherit !data-[hover=true]:bg-inherit !group-data-[focus=true]:inherit !text-lg',
                innerWrapper: 'bg-inherit',
                inputWrapper: 'bg-inherit data-[hover=true]:bg-inherit group-data-[focus=true]:bg-black  group-data-[focus=true]:border-2 group-data-[focus=true]:border-white group-data-[focus=true]:rounded-2xl',
                
            }}
            value={text}
            onValueChange={setText}
          />
          {/* <button
            className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-[#262626] hover:text-accent-foreground h-10 py-2 hidden group/btn ml-2 px-2 lg:h-10 lg:px-4 lg:inline-flex"
            title="Delete message (press '-')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-minus-circle invisible group-hover:visible group-focus/btn:visible"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8 12h8"></path>
            </svg>
          </button> */}
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
