import useStock from "../hooks/useStock"
import {Link} from 'react-router-dom'

export default function Home() {
    const {items} = useStock()

    const diversity = items.length
    const totalQuantity = items.reduce((sum, item) => +sum + +item.quantity, 0)

    const today = new Date()
    const limitDate = new Date()

    limitDate.setDate(limitDate.getDate() - 10)

    const recentItems = items.filter((item) => (
        item.createdAt >= limitDate && item.createdAt <= today
    ))

    const totalRecentItems = recentItems.length

    const lowItems = items.filter((item) => ( item.quantity < 10))

    const totalLowItems = lowItems.length

    return (
        <>
            <h1>Dashboard</h1>
            <div className="row">
                <div className="dashboard-card">
                    Diversidade de Itens
                    <span>{diversity}</span>
                </div>
                <div className="dashboard-card">
                    Inventário total
                    <span>{totalQuantity}</span>
                </div>
                <div className="dashboard-card">
                    Itens recentes
                    <span>{totalRecentItems}</span>
                </div>
                <div className="dashboard-card">
                    Itens acabando
                    <span>{totalLowItems}</span>
                </div>
            </div>
            <div className="row">
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Itens Recentes</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentItems.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>
                                        <Link to={`/makeupStore/items/${item.id}`} className="button is-small">Ver</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Itens acabando</th>
                                <th>Quantidade</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lowItems.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>
                                        <Link to={`/makeupStore/items/${item.id}`} className="button is-small">Ver</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}