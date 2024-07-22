

export let ContactUs = () => {
    let DATA = {
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    }
    return (
        <div>

            <div className="h-fit w-96 sm:w-[500px] md:w-[600px] lg:w-[800px] mx-auto">
                <div className="font-bold text-2xl">Contact Us</div>
                <div>{DATA.content}</div>
            </div>
        </div>
    )
}