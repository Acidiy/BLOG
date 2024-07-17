export const Tag = ({index, type}) => {
    let topics = ['Technology', 'Politics']

    let styles = {
        blue:'w-fit h-5 px-3 rounded-md bg-blue-500 text-white',
        white:'w-fit h-5 px-3 rounded-md bg-slate-200'
    }

    return (
        <div className={type ? styles.blue : styles.white}>{topics[index]}</div>
    )
}