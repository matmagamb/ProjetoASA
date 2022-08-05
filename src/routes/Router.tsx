import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Planos } from "../pages/Planos";



export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/breve" element={<Planos />} />
        </Routes>
    )
}