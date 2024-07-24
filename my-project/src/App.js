import { Route, Routes } from "react-router-dom"
import { ContactUs, AllPosts, Home, SinglePost, DATA, New } from "./components"
import { BasicLayout } from "./layout/BasicLayout"

export default function App() {



  return (
    <BasicLayout>
      <Routes>
        <Route path="Home" element={<Home Pimage={DATA.post_image_data} P={DATA.tags} Pheadline={DATA.headline} Pdate={DATA.date}/>} />
        <Route path="Posts" element={<AllPosts image={DATA.post_image_data} tag={DATA.tags} headline={DATA.headline} date={DATA.date}/>} />
        <Route path="Contact" element={<ContactUs />} />
        <Route path="Single" element={<SinglePost image={DATA.single.image} author={DATA.single.author} date={DATA.date} headline={DATA.single.headline} content={DATA.single.content} />} />
        <Route path="/" element={<New />} />
      </Routes>
    </BasicLayout>
  )
}
