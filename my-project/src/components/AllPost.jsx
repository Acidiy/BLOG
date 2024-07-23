import { Post } from "./Post"
import { DATA } from "./DATA";
import { useState } from "react";

export let AllPosts = () => {
    let [page, setPage] = useState(1);
    let [lessen, setLessen] = useState(false)

    let load = () => {
        setPage((prev) => prev + 1)
        if (page === 2) setLessen(true)
    }

    let showless = () => {
        setPage(1)
        setLessen(false)
    }

    return (
        <div className="w-full h-fit py-4 flex flex-col gap-4">
            <div className="text-2xl font-bold">All Blog Post</div>
            <div className="w-[400px] sm:w-[500px] md:w-[880px] lg:w-[1220px] xl:[1400px] mx-auto">
                <div className="w-full grid max-sm:grid-cols-1 max-md:grid-cols-2 grid-cols-3  gap-8">
                    {DATA.post_image_data.slice(0,3*page).map((element) => { return <Post image={element} topics={DATA.tags.travel} tag_type={false} content={DATA.headline} date={DATA.date} /> })}
                </div>
            </div>
            {lessen ? <button onClick={showless} className="w-32 h-12 bg-red-400 mx-auto"></button> : <button onClick={load} className="w-32 h-12 bg-black mx-auto"></button>}
        </div>
    )
}