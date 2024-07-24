export const Headline = ({card, content}) => {

    let styles_type = {
        trending_card:'w-full h-[76px] text-wrap text-white mb-4 text-left',
        post_card:'w-full h-fit text-wrap max-sm:text-2xl sm:text-sm md:text-md lg:text-lg xl:text-2xl text-left'
    }

    return (
        <div className={card ? styles_type.trending_card : styles_type.post_card}>
            {content}
        </div>
    )
}