import { createContext, useState } from "react";
import PropTypes from 'prop-types'

export const StockContext = createContext()

StockContextProvider.propTypes = {
    children: PropTypes.node
}

export default function StockContextProvider({children}) {
    const [items, setItems] = useState(() => {
        const savedItems = localStorage.getItem("stock-make")

        if(!savedItems) {
            return []
        } else {
            const items = JSON.parse(savedItems)
            items.forEach((item) => (
                item.createdAt = new Date(item.createdAt),
                item.updatedAt = new Date(item.updatedAt)
            ))
            return items
        }
    })

    const addItem = (item) => {
        setItems(currentState => {
            const updatedItems = [item, ...currentState]
            localStorage.setItem("stock-make", JSON.stringify(updatedItems))
            return updatedItems
        })
    }

    const updatedItem = (itemId, newAttributes) => {
        setItems(currentState => {
            const findItem= currentState.findIndex((item) => item.id === +itemId)
        const currentItems = [...currentState]
        Object.assign(currentItems[findItem], newAttributes, {updatedAt: new Date()})
        localStorage.setItem("stock-make", JSON.stringify(currentItems))
        return currentItems
        })
    }

    const getItem = (itemId) => {
        return items.find((item) => item.id === +itemId)
    }

    const deleteItem = (itemId) => {
        setItems(currentState => {
            const updatedItems = currentState.filter((item) => item.id !== +itemId)
        localStorage.setItem("stock-make", JSON.stringify(updatedItems))
        return updatedItems
        })
        
    }

    const stock = {
        items,
        addItem,
        updatedItem,
        getItem,
        deleteItem
    }
    return (
        <StockContext.Provider value={stock}>
            {children}
        </StockContext.Provider>
    )
}