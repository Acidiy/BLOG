import React, { useState, useEffect } from "react"

export let New = () => {
    let [start, setStart] = useState(false);
    let [countdown, setCountdown] = useState(10)

    useEffect(() => {
        if (countdown === 0) return
        setInterval(() => {
            if(countdown === 0){
                clearInterval()
            }
            else{
                setCountdown((prev) => prev - 1)
            }
        },1000)
    }, [start])

    return <div className="size-fit mx-auto">
        <button className="size-20 bg-black" onClick={() => setStart(true)}></button>
        <div>{countdown}</div>
    </div>
    // <button onClick={() => setCount(count+1)}>
    //     {count}
    // </button>
}