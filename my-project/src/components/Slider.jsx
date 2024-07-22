
import { Image } from "./Image"
import { Tag } from "./tag";
import { Headline } from "./headline";
import { Date } from "./date";

export let Slider = ({image, date, topics}) => {


    return (
        <div className="w-[640px] md:w-[768px] lg:w-[1200px] h-[407px] md:h-[488px] lg:h-[650px] max-sm:hidden relative">
            <div className="w-full h-full absolute -z-10 top-0">
                <Image image={image}/>
            </div>
            <div className="w-[300px] sm:w-[400px] md:w-[500px] xl:w-[600px] h-[250px] p-10 bg-slate-200 opacity-90 rounded-xl absolute bottom-8 left-8 z-10 flex flex-col justify-between">
                <Tag topics={topics} type={1}/>
                <Headline card={false} content={'Grid system for better Design User Interface'} />
                <Date date={date}/>
            </div>
        </div>
    )
}