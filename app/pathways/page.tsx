import { Sidebar } from "@/components/pathways/sidebar";
import { Settings } from '@/components/pathways/settings'
import { History } from '@/components/pathways/history'
import { Interface } from '@/components/pathways/interface'

export default function PathwaysPage() {
    return <main className='bg-[#121418] text-[#f8f8f7] w-full overflow-hidden z-[60] relative flex flex-row' style={{
        height: 'calc(100vh - 4rem)'
    }}>
        <Sidebar />
        <div className='w-[85vw] h-full bg-inherit flex flex-col'>
            <div className='h-[10%] w-full border-b-1 border-[rgba(153, 153, 153, 0.5)] flex items-center justify-between px-3'>
                <h2 className="p-4 pl-[24px] text-2xl font-medium">Optimizers</h2>
            </div>
            <div className='h-[90%] w-full flex flex-row'>
                <History />
                <Interface />
                <Settings />
            </div>
        </div>
    </main>
}