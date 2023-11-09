import { Link, useParams } from "react-router-dom"
import useStock from "../../hooks/useStock"
import DeleteButton from "../../components/DeleteButton"

export default function ShowItem() {
    const {id} = useParams()

    const {getItem} = useStock()

    const item = getItem(id)

    console.log(item)

    console.log(id)
    return (
        <div className="item">
            <div className="item-header">
                <h2>{item.name}</h2>
                <Link to={`/items/${item.id}/update`} className="button is-small is-primary">Atualizar</Link>
                <DeleteButton itemId={item.id} itemName={item.name} />
            </div>
            <div className="row">
                <span>
                    Categoria: {item.category}
                </span>
                <span >
                    Quantidade em estoque: {item.quantity}
                </span>
                <span >
                    Preço: {item.price}
                </span>
            </div>
            <div>
                <p className="description">Descrição do produto: {item.description}</p>
                <div className="row">
                    <p className="dateItem">Cadastrado em: {item.createdAt.toDateString()}</p>
                    <p className="dateItem">Atualizado em: {item.updatedAt.toDateString()}</p>
                </div>
            </div>
        </div>
    )
}