import { Navbar, Footer } from "../components";

export let BasicLayout = ({children}) => {
    return(
        <div className="flex flex-col min-h-screen gap-24 justify-between">
            <Navbar/>
            <div className="w-[1200px] mx-auto">
                {children} 
            </div>
            <Footer/>
        </div>
    )
}