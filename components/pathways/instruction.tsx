import Model from "@/meta/model_definitions"

interface InstructionInterface {
    model: Model
}

export const Instruction: React.FC<InstructionInterface> = ({
    model
}) => {
    let x;
    console.log(model.getName())
    if (model.getName().trim().toLocaleLowerCase().includes('entitle')) {
        x='Title Optimizer'
    } else if (model.getName().trim().toLocaleLowerCase().includes('catal')) {
        x='Category Chooser'
    } else {
        x='Abstractify'
    }
    return <div className='h-full w-[20%] bg-inherit flex flex-col border-r-1 border-[rgba(153, 153, 153, 0.5)] p-6 relative'>
        <p className='font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 absolute left-6 top-7 text-xl uppercase'>
            {x}
        </p>
    </div>
}