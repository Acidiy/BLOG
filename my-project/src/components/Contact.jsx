import { DATA } from "./DATA"

export let ContactUs = () => {
    return (
        <div className="w-[650px] flex flex-col gap-6 mx-auto">

            <div className="h-fit w-full">
                <div className="font-bold text-2xl">Contact Us</div>
                <div>{DATA.content}</div>
            </div>

            <div className="w-full h-32 flex justify-between">
                <div className="w-72 h-28 border-2 rounded-lg flex flex-col justify-around px-4">
                    <div className="text-lg font-bold">Address</div>
                    <div className="font-thin">{DATA.address}</div>
                </div>
                
                <div className="w-72 h-28 border-2 rounded-lg flex flex-col justify-around px-4">
                    <div className="text-lg font-bold">Contact</div>
                    <div className="w-fit">
                        <div className="font-thin">{DATA.contact.number}</div>
                        <div className="font-thin">{DATA.contact.email}</div>
                    </div>
                </div>
            </div>

            <div className="w-full h-[440px] bg-slate-200 rounded-lg flex flex-col p-5 gap-6">
                <div className="text-lg font-bold">Leave a Massage</div>
                <div className="flex gap-6">
                    <input placeholder="Your Name" className="w-56 h-9 border-2 border-slate-400 rounded-md"/>
                    <input placeholder="Your Email" className="w-56 h-9 border-2 border-slate-400 rounded-md"/>
                </div>
                <input placeholder="Subject" className="w-[470px] h-9"/>
                <input placeholder="Subject" className="w-[470px] h-32"/>
                <button className="bg-blue-500 w-32 h-10 rounded-lg text-white">Send</button>
            </div>
        </div>
    )
}