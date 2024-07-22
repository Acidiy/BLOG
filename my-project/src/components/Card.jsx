import { Image } from "./Image"
import { Tag } from "./tag"
import { Headline } from "./headline"

export const Card = ({ image_index, topics, tag_type, headline_type, content }) => {


    return (
        <div className=" w-72 h-80 bg-gradient-to-b from-[#00000090] to-black rounded-xl relative flex flex-col justify-end">
            <div className="w-72 h-80 absolute -z-10">
                <Image image={image_index} />
            </div>
            <div className="w-56 h-32 mx-8 flex flex-col justify-between z-10">
                <Tag topics={topics} type={tag_type} />

                <Headline card={headline_type} content={content} />
            </div>
        </div>)
}