import { Image } from "./Image"
import { Tag } from "./tag"
import { Headline } from "./headline"
import { Date } from "./date"
import { Link } from "react-router-dom"

export const Post = ({ image, topics, tag_type, content, date }) => {
    return <Link className="size-fit" to="/Single">
        <button className="w-96 h-[500px] rounded-xl border-2 border-gray-700 p-4 flex flex-col gap-6 mx-auto hover:shadow-2xl hover:shadow-black transition-all ">

            <div className="w-full h-1/2">
                <Image image={image} />
            </div>

            <Tag topics={topics} type={tag_type} />
            <Headline card={false} content={content} />
            <Date date={date} />

        </button>
    </Link>
}