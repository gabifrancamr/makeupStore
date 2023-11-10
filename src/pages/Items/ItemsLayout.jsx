import { Link, Outlet, useLocation } from "react-router-dom";

export default function ItemsLayout() {
  const { pathname } = useLocation();
  return (
    <>
      <main>
        <h1>Itens de Maquiagem</h1>
        <div className="tabs">
          <Link
            to="/makeupStore/items"
            className={`tab ${pathname === "/items" ? "active" : ""}`}
          >
            Todos as Maquiagens
          </Link>

          <Link
            to="/makeupStore/items/new"
            className={`tab ${pathname === "/items/new" ? "active" : ""}`}
          >
            Adicionar Nova Maquiagem
          </Link>
        </div>
        <Outlet />
      </main>
    </>
  );
}