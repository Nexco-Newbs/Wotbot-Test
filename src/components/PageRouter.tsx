import { Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/Error";
import Account from "../pages/Account";
import Linekey from "../pages/Linekey";
import Expansion from "../pages/Expansion";

function PageRouter() {
    return (
        <Routes>
            <Route index element={<Account />} />
            <Route path="linekey" element={<Linekey />} />
            <Route path="expansion" element={<Expansion />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
}

export default PageRouter;
