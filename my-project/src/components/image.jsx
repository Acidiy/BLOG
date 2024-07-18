export const Image = ({image , type = true}) => {

    let styles = {
        slider:" w-[640px] md:w-[768px] lg:w-[1024px] rounded-xl absolute -z-10",
        trending:"w-72 h-80 rounded-xl absolute -z-10"
    }


    return <img src={image} className={type ? styles.trending : styles.slider}/>
}