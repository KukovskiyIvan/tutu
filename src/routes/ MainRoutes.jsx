import { Route, Routes } from "react-router";
import MainPage from "../pages/MainPage";
import HelpersPage from "../pages/HelpersPage";

export default function MainRoutes() {
    return(
        <Routes>
            <Route path="/main" element={<MainPage/>}/>
            <Route path="/helpers" element={<HelpersPage/>}/>
        </Routes>
    )
}