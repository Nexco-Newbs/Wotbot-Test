import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Templage from "../pages/Templage"
import ErrorPage from "../pages/Error"

function PageRouter() {
    return(
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="templage" element={<Templage />} />
            <Route path="*" element={<ErrorPage/>} />
        </Routes>
    )
}

export default PageRouter