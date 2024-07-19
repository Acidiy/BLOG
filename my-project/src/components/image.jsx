export const Image = ({image}) => {

    let styles = {
        slider:" w-full rounded-xl",
        trending:"w-full h-full rounded-xl"
    }


    return <img src={image} className={styles.trending}/>
}