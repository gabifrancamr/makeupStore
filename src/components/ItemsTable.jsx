import useStock from "../hooks/useStock";
import { Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";


export default function ItemsTable() {
  const { items } = useStock();
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Quantidade</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td translate="no">{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
              <td className="buttons-table">
                <Link to={`/makeupStore/items/${item.id}`} className="button is-small">Ver</Link>
                <Link to={`/makeupStore/items/${item.id}/update`} className="button is-small is-primary">Atualizar</Link>
                <DeleteButton itemId={item.id} itemName={item.name}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
