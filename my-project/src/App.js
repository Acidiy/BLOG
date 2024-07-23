import { Route, Routes } from "react-router-dom"
import { ContactUs, AllPosts, Home } from "./components"
import { BasicLayout } from "./layout/BasicLayout"

export default function App() {



  return (
    <BasicLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Posts" element={<AllPosts />} />
        <Route path="Contact" element={<ContactUs />} />
      </Routes>
    </BasicLayout>
  )
}
