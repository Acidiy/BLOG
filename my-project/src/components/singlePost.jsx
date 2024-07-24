import { Image } from "./Image"

export let SinglePost = ({ image, author, date, headline, content }) => {
    return <div className="w-[800px] h-full flex flex-col gap-5 justify-between mx-auto">
        <div className="flex flex-col gap-1">
            <div className="w-full h-fit text-2xl font-bold">{headline}</div>
            <div className="w-fit h-7 flex gap-6">
                <div className="w-fit font-thin">{author}</div>
                <div className="w-fit font-thin">{date}</div>
            </div>
        </div>
        <div className="w-full h-[460px]"><Image image={image} /></div>
        <div className="w-full h-full flex flex-col gap-5 justify-between">
            <div className="w-full h-fit flex flex-col gap-4">
                <div className="w-full h-fit text-left font-thin">{content.s1.p1}</div>
                <div className="w-full h-fit text-left font-thin">{content.s1.p2}</div>
            </div>
            <div className="w-full h-fit flex flex-col gap-3">
                <div className="w-full h-fit text-xl font-bold">{content.s2.title}</div>
                <div className="w-full h-fit text-left font-thin">{content.s2.p1}</div>
                <div className="w-full h-fit text-left font-thin">{content.s2.p2}</div>
            </div>
            <div className="w-full h-fit flex flex-col gap-3">
                <div className="w-full h-fit text-xl font-bold">{content.s3.title}</div>
                <div className="w-full h-fit text-left font-thin">{content.s3.p1}</div>
                <div className="w-full h-fit text-left font-thin">{content.s3.p2}</div>
            </div>
        </div>
    </div>
}