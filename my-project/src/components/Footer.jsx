import { DATA } from "./DATA"
import { Link } from "react-router-dom"

export let Footer = () => {
    return <div className="w-full h-[500px] bg-slate-300 py-16">
        <div className="w-[1200px] h-full mx-auto flex flex-col justify-between">
            <div className="h-56 flex justify-between">
                <div className="w-full h-full">
                    <div className="w-72 h-60 flex flex-col justify-between">
                        <div className="text-xl font-semibold">About</div>
                        <div className="font-thin">{DATA.footer.about.content}</div>
                        <div>
                            <div className="flex">Email:<div className="font-thin">{DATA.footer.about.email}</div></div>
                            <div className="flex">Phone:<div className="font-thin">{DATA.footer.about.Phone}</div></div>
                        </div>
                    </div>
                </div>

                <div className="size-full">
                    <div className="size-fit flex flex-col gap-2 mx-auto">
                        <Link to="/"><button className="size-fit font-thin">HOME</button></Link>
                        <Link to="/Posts"><button className="size-fit font-thin">All Blog Post</button></Link>
                        <Link to="/Contact"><button className="size-fit font-thin">Contact</button></Link>
                        <Link to="/New"><button className="size-fit font-thin">useEffect</button></Link>
                    </div>
                </div>

                <div className="size-full">

                </div>
            </div>
            <div className="w-full h-[1px] bg-slate-400 opacity-50" />
            <div className="w-full h-24"></div>
        </div>
    </div>
}