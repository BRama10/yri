import { Textarea } from "@nextui-org/react";

interface AIBoxProps {
  text: string;
  load: boolean;
}

export const AIBox: React.FC<AIBoxProps> = ({
  load,
  text
}) => {
  return (
    <div className="group" data-row-key="message_first">
      <div className="flex w-full flex-col content-start lg:flex-row">
        <div className="flex justify-between p-2 lg:p-4">
          <button className="inline-flex items-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 mr-2 min-w-[85px] justify-start bg-none px-2 py-1 text-base uppercase lg:min-w-[100px] lg:px-4 lg:py-2">
            nightshade
          </button>
        </div>
        <div className="flex flex-1 cursor-text items-center p-1 lg:items-start lg:p-4">
          {load ?
            <l-spiral
              size="40"
              speed="1.1"
              color="green"
            ></l-spiral>
            :
            <Textarea
              className="h-auto flex w-full"
              id="message_input_first"
              minRows={1}
              placeholder="Fix the abstract to help me win ISEF."
              classNames={{
                base: 'bg-inherit',
                input: 'bg-inherit !data-[hover=true]:bg-inherit !group-data-[focus=true]:inherit !text-lg',
                innerWrapper: 'bg-inherit',
                inputWrapper: 'bg-inherit data-[hover=true]:bg-inherit group-data-[focus=true]:bg-black  group-data-[focus=true]:border-2 group-data-[focus=true]:border-white group-data-[focus=true]:rounded-2xl',

              }}
              value={text}
            />}

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
