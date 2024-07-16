import { useState } from "react";

export function Slider() {
    let [current_content, setCurrent_content] = useState(0)
    let [image, setImage] = useState(['bg-sliderPic0', 'bg-sliderPic1', 'bg-sliderPic2'])

    let content_DATA = [
        { type_of_content: 'tech', passage: 'Grid system for better Design User Interface', date: 'August 20, 2022' },
        { type_of_content: 'politics', passage: 'alzheimer confirmed', date: 'june 1, 2024' },
        { type_of_content: 'politics', passage: 'eagle shot', date: 'july 14, 2024' },
    ]

    const Change_Content_Forward = () => {
        if (current_content < 2) {
            setCurrent_content(current_content + 1)
        }
        if (current_content === 2) {
            setCurrent_content(0)
        }
    }

    const Change_Content_Backward = () => {
        if (current_content > 0) {
            setCurrent_content(current_content - 1)
        }
        if (current_content === 0) {
            setCurrent_content(2)
        }
    }

    return (
        <div className="w-[1200px] mx-auto">
            <div className={`w-full h-[600px] p-4 ${image[current_content]} rounded-xl flex flex-col justify-end`}>
                <div className="w-[600px] h-[240px] p-10 bg-white rounded-xl flex flex-col justify-between">
                    <div className="w-fit h-7 px-1 bg-sky-600 rounded-md text-white">{content_DATA[current_content].type_of_content}</div>
                    <div className="w-[500px] h-fit text-4xl">{content_DATA[current_content].passage}</div>
                    <div className="w-fit h-6 text-slate-400">{content_DATA[current_content].date}</div>
                </div>
            </div>
            <div className="w-full flex justify-end gap-1 mt-2">
                <button onClick={Change_Content_Backward} className="w-8 h-8 border-2 rounded-md active:bg-slate-600"></button>
                <button onClick={Change_Content_Forward} className="w-8 h-8 border-2 rounded-md active:bg-slate-600"></button>
            </div>
        </div>
    )
}