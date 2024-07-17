import { Image } from "./image"
import { Tag } from "./tag"
import { Headline } from "./headline"

export const Card = ({ image_index = 1, tag_index = 0, tag_type = true, headline_type = true}) => {
    return (
        <div className=" w-72 h-80 bg-gradient-to-b from-[#00000090] to-black rounded-xl relative flex flex-col justify-end">
            <Image index={image_index} />
            <div className="w-56 h-32 mx-8 flex flex-col justify-between z-10">
                <Tag index={tag_index = 0} type={tag_type} />

                <Headline index={0} card={headline_type} />
            </div>
        </div>)
}