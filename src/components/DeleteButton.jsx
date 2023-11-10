import PropTypes from "prop-types";
import useStock from "../hooks/useStock";
import BoxDelete from "./BoxDelete";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

DeleteButton.propTypes = {
  itemId: PropTypes.number,
  itemName: PropTypes.string,
};

export default function DeleteButton({ itemId, itemName }) {
    const {deleteItem} = useStock()
    const [showConfirmation, setShowConfirmation] = useState(false)
    const navigate = useNavigate()

    const handleDelete = () => {
      setShowConfirmation(true);
    };
  
    const confirmDelete = () => {
      deleteItem(itemId);
      setShowConfirmation(false);
      navigate("/makeupStore/items")
    };
  
    const cancelDelete = () => {
      setShowConfirmation(false);
    };

  
  return (
    <>
      <button 
        className="button is-small is-danger"
        onClick={handleDelete}
      >
        Excluir
      </button>
      {showConfirmation && (
        <>
          <div className="overlay" onClick={cancelDelete}></div>
          <BoxDelete
            itemName={itemName}
            confirmDelete={confirmDelete}
            cancelDelete={cancelDelete}
          />
        </>
      )}
    </>
  )
}