import { Navbar, Footer } from "../components";

export let BasicLayout = ({children}) => {
    return(
        <div className="flex flex-col min-h-screen justify-between">
            <Navbar/>
            <div className="w-[1200px] mx-auto py-10">
                {children} 
            </div>
            <Footer/>
        </div>
    )
}