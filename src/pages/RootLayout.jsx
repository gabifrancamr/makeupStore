import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
    return  (
        <>
            <header>
                <Link to="/" className="logo">Makeup Store</Link>
                <nav>
                    <Link to="/items">Itens</Link>
                    <Link to="/">DashBoard</Link>
                </nav>
            </header>
            <div>
                <Outlet />
            </div>
            <footer>
                Feito com React e React Router
            </footer>
        </>
    )
}
