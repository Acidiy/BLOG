import { Card } from "./Card";
import { Slider } from "./Slider";
import { AllPosts } from "./AllPost";
import { DATA } from "./DATA";

export let Home = ({Pimage, Ptag, Pheadline, Pdate}) => {
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




            <AllPosts image={Pimage} tag={Ptag} headline={Pheadline} date={Pdate}/>



        </div>

    )
}