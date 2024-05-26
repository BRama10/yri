import Model from "@/meta/model_definitions"

interface InstructionInterface {
    model: Model
}

export const Instruction: React.FC<InstructionInterface> = ({
    model
}) => {
    
    return <div className='h-full w-[20%] bg-inherit flex flex-col border-r-1 border-[rgba(153, 153, 153, 0.5)] p-6 relative'>
        <p className='font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 absolute left-6 top-7 text-xl uppercase'>
            {model.getName()}
        </p>
    </div>
}