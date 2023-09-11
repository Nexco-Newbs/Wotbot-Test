import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Templage from "../pages/Templage"

function PageRouter() {
    return(
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="templage" element={<Templage />} />
        </Routes>
    )
}

export default PageRouter