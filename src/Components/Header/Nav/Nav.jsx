import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/novidades">Novidades</NavLink>
                </li>
                <li>
                    <NavLink to="/sobre">Sobre</NavLink>
                </li>
            </ul>
        </nav>
    )
}