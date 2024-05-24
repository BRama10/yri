import { Textarea } from "@nextui-org/react";

export const AIBox = () => {
  return (
    <div className="group" data-row-key="message_first">
      <div className="flex w-full flex-col content-start lg:flex-row lg:hover:bg-[#262626]">
        <div className="flex justify-between p-2 lg:p-4">
          <button className="inline-flex items-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 mr-2 min-w-[85px] justify-start bg-none px-2 py-1 text-base uppercase lg:min-w-[100px] lg:px-4 lg:py-2 lg:hover:bg-accent lg:group-hover:bg-accent">
            nightshade
          </button>
        </div>
        <div className="flex flex-1 cursor-text items-center p-1 lg:items-start lg:p-4">
          
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
