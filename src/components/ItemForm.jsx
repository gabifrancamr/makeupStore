import { useRef, useState } from "react";
import PropTypes from "prop-types";
import StockItem, { CATEGORIES } from "../entities/StockItem";
import useStock from "../hooks/useStock";
import { useNavigate } from "react-router-dom";
import Notification from "./Notification";

ItemForm.propTypes = {
  itemToUpDate: PropTypes.object,
};

export default function ItemForm({ itemToUpDate }) {
  const formInit = {
    name: "",
    description: "",
    quantity: 0,
    price: 0,
    category: "",
  };
  const [item, setItems] = useState(itemToUpDate ? itemToUpDate : formInit);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const inputRef = useRef(null);
  const { addItem, updatedItem } = useStock();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setItems((currentState) => {
      return {
        ...currentState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      if (itemToUpDate) {
        updatedItem(itemToUpDate.id, item);
        //alert("Item atualizado com sucesso!");
        setNotificationMessage("Item atualizado com sucesso!");
        setShowNotification(true);  
      } else {
        const newItem = new StockItem(item);
        addItem(newItem);
        //alert("Item adicionado com sucesso")
        setNotificationMessage("Item adicionado com sucesso");
        setShowNotification(true);
        setItems(formInit);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      inputRef.current.focus();
    }
  };

  const handleNotificationClose = () => {
    setShowNotification(false);

    if(notificationMessage === "Item atualizado com sucesso!") {
      navigate("/makeupStore/items");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              name="name"
              id="name"
              ref={inputRef}
              required
              autoComplete="off"
              value={item.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="quantity">Quantidade</label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              required
              min={0}
              step={1}
              value={item.quantity}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="price">Preço</label>
            <input
              type="number"
              name="price"
              id="price"
              required
              min={0.0}
              step={0.01}
              value={item.price}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="category">Categoria</label>
            <select
      
              name="category"
              id="category"
              required
              value={item.category}
              onChange={handleChange}
            >
              <option disabled value="">
                Escolher
              </option>

              {CATEGORIES.map((category) => (
                <option
                key={category}
                 value={category} 
                 defaultChecked={item.category === category}>
                 {category}
               </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="description">Descrição</label>
          <textarea
            name="description"
            id="description"
            required
            rows={6}
            value={item.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <button className="button is-large is-primary">Salvar</button>
      </form>
      {showNotification && (
        <>
          <div className="overlay"></div>
        <Notification
          message={notificationMessage}
          onClose={handleNotificationClose}
        />
        </>
      )}
    </>
  );
}