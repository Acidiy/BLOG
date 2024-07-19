import { Image } from "./image"
import { Tag } from "./tag"
import { Headline } from "./headline"
import { Date } from "./date"

export const Post = ({ image, topics, tag_type, content, date}) => {
    return (
        <div className="w-96 sm:w-60 md:w-[270px] xl:w-96 h-[476px] sm:h-72 md:h-80 xl:h-[476px] rounded-xl border-2 border-gray-700 p-4 flex flex-col max-sm:gap-5 sm:gap-2 xl:gap-6">

            <div className="w-full h-1/2">
                <Image image={image} />
            </div>

            <Tag topics={topics} type={tag_type}/>
            <div className="">
            <Headline card={false} content={content}/>
            </div>
            <Date date={date}/>

        </div>)
}