import { Post } from "./Post"
import { DATA } from "./DATA";
import { Navbar } from "./Navbar";

export let AllPosts = () => {

    return (
        <div>
            <Navbar/>
            <div className="w-full h-fit py-4">
                <div className="w-[400px] sm:w-[500px] md:w-[880px] lg:w-[1220px] xl:[1400px] mx-auto">
                    <div className="text-2xl">All Blog Post</div>
                    <div className="w-full grid max-sm:grid-cols-1 max-md:grid-cols-2 grid-cols-3  gap-8">
                        {DATA.post_image_data.map((element) => { return <Post image={element} topics={DATA.tags.travel} tag_type={false} content={DATA.headline} date={DATA.date} /> })}
                    </div>
                </div>
            </div>
        </div>
    )
}