import { Card } from "./Card";
import { Slider } from "./Slider";
import { Post } from "./Post";

import { DATA } from "./DATA";

export let Home = () => {
    return (

        <div className="flex flex-col gap-24 my-24">



            <div className="w-[640px] md:w-[768px] lg:w-[1024px] flex overflow-scroll mx-auto">
                {DATA.slider_image_data.map((element) => <div className="w-full"><Slider image={element} date={DATA.date} topics={DATA.tags.tech} /></div>)}
            </div>



            <div className=" w-[600px] md:w-[920px] lg:w-[1220px] xl:[1400px] flex flex-col mx-auto">
                <div className="text-2xl">Trending</div>
                <div className="w-[600px] md:w-[920px] lg:w-[1220px] xl:[1400px] flex gap-5 overflow-scroll">
                    {DATA.card_image_data.map((element) => <Card image_index={element} topics={DATA.tags.politics} tag_type={true} headline_type={true} content={DATA.headline} />)}
                </div>
            </div>




            <div className="w-[400px] sm:w-[500px] md:w-[880px] lg:w-[1220px] xl:[1400px] mx-auto">
                <div className="text-2xl">All Blog Post</div>
                <div className="w-full grid max-sm:grid-cols-1 max-md:grid-cols-2 grid-cols-3  gap-8">
                    {DATA.post_image_data.map((element) => { return <Post image={element} topics={DATA.tags.travel} tag_type={false} content={DATA.headline} date={DATA.date} /> })}
                </div>
            </div>



        </div>

    )
}