import { Outlet, matchPath } from "react-router-dom";
import { Header } from "./shared/Header/Header";
import { Footer } from "./shared/Footer/Footer";

function App() {
    return (
        <div className="page-wrapper">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default App;
