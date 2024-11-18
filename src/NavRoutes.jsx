import {Routes, Route} from "react-router-dom";

export default function NavRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/novidades" element={<Novidades/>}/>
            <Route path="/sobre" element={<Sobre/>}/>
        </Routes>
    )
}