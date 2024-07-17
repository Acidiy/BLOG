export const Headline = ({index, card}) => {

    let content = ['alzheimer confirmed', 'eagle shot']

    let styles_type = {
        trending_card:'w-56 h-[76px] text-wrap text-white',
        post_card:'w-80 h-32 text-wrap text-2xl'
    }

    return (
        <div className={card ? styles_type.trending_card : styles_type.post_card}>
            {content[index]}
        </div>
    )
}