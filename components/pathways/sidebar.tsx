import DiscordButton from "../ui/discordbutton"

export const Sidebar = () => {
    return <div className='h-full w-[12vw] bg-[#191b1f] flex flex-col border-r-1 border-[rgba(153, 153, 153, 0.5)] px-4 pt-6 items-center gap-y-6'>
        {/* <div className='bg-white w-full'> */}
        <div className='text-white font-semibold text-xl text-center'>
            <p>YOUTH</p>
            <p>RESEARCH</p>
            <p>INITIATIVE</p>
        </div>
        <DiscordButton isSSO={false} url={'https://discord.gg/VPUMevgjf7'} />
        {/* </div> */}

        <div className="group relative w-fit transition-transform duration-300 active:scale-95">
            <button className="relative z-10 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 p-0.5 duration-300 group-hover:scale-110">
                <a target='_blank' href='https://www.youthresearchinitiative.org' className="block rounded-md bg-slate-95a0 px-4 py-2 font-semibold text-slate-100 duration-300 group-hover:bg-slate-950/50 group-hover:text-slate-50 group-active:bg-slate-950/80">
                    Visit Website!
                </a>
            </button>
            <span className="absolute -inset-1 z-0 transform-gpu rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 opacity-30 blur-xl transition-all duration-300 group-hover:opacity-90 group-active:opacity-50" />
        </div>

    </div>
}