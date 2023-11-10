import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
    return  (
        <>
            <header>
                <Link to="/makeupStore/" className="logo">Makeup Store</Link>
                <nav>
                    <Link to="/makeupStore/items">Itens</Link>
                    <Link to="/makeupStore/">DashBoard</Link>
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
