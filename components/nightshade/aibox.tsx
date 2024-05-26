import { Textarea } from "@nextui-org/react";
import Markdown from 'react-markdown'

interface AIBoxProps {
  text: string;
  load: boolean;
}

export const AIBox: React.FC<AIBoxProps> = ({
  load,
  text
}) => {
  return (
    <div className="group border-b-1 border-[rgba(153, 153, 153, 0.5)]" data-row-key="message_first">
      <div className="flex w-full flex-col content-start lg:flex-row lg:justify-between">
        <div className="flex justify-between p-2 lg:p-4">
          <button className="inline-flex items-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 mr-2 min-w-[85px] justify-start bg-none px-2 py-1 text-base uppercase lg:min-w-[100px] lg:px-4 lg:py-2 text-[#52eca2]">
            nightshade
          </button>
        </div>
        <div className="flex cursor-text items-center p-1 lg:items-start lg:p-3 w-4/5">
          {load ?
            <l-spiral
              size="40"
              speed="1.1"
              color="green"
            ></l-spiral>
            :
            <Markdown className='text-white bg-inherit text-base px-2'>{text}</Markdown>
            // <Textarea
            //   className="h-auto flex w-full"
            //   id="message_input_first"
            //   minRows={1}
            //   maxRows={40}
            //   placeholder="Fix the abstract to help me win ISEF."
            //   classNames={{
            //     base: 'bg-inherit p-2',
            //     input: 'bg-inherit !data-[hover=true]:bg-inherit !group-data-[focus=true]:inherit !text-base overflow-y-visible h-fit',
            //     innerWrapper: 'bg-inherit',
            //     inputWrapper: 'bg-inherit data-[hover=true]:bg-inherit group-data-[focus=true]:bg-inherit  group-data-[focus=true]:border-0 group-data-[focus=true]:border-none group-data-[focus=true]:rounded-2xl',

            //   }}
            //   value={text}
            //   readOnly
            // />
            }

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
