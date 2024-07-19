export const Tag = ({topics, type}) => {

    let styles = {
        blue:'w-fit h-6 px-3 rounded-md bg-blue-500 text-white',
        white:'w-fit h-6 px-3 rounded-md bg-slate-100 text-blue-600'
    }

    return (
        <div className={type ? styles.blue : styles.white}>{topics}</div>
    )
}