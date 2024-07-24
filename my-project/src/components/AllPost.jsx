import { Post } from "./Post"
import { useState } from "react";

export let AllPosts = ({image, tag, headline, date}) => {
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
                    {image.slice(0,3*page).map((element) => { return <Post image={element} topics={tag.travel} tag_type={false} content={headline} date={date} /> })}
                </div>
            </div>
            {lessen ? <button onClick={showless} className="w-32 h-12 bg-red-400 rounded-xl mx-auto">Show Less</button> : <button onClick={load} className="w-32 h-12 bg-emerald-700 rounded-xl mx-auto text-white">Load More</button>}
        </div>
    )
}