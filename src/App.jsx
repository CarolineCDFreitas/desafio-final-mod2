import GlobalStyle from "./globalStyle";
import { BrowserRouter } from "react-router-dom";
import NavRoutes from "../src/NavRoutes";
import Header from "./Components/Header/Header";

export default function App() {
  return (
    <BrowserRouter>
    <GlobalStyle/>
      <Header />
      <NavRoutes/>
    </BrowserRouter>
  );
}
