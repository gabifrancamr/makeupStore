import PropTypes from "prop-types";

BoxDelete.propTypes = {
    itemName: PropTypes.string,
    confirmDelete: PropTypes.func,
    cancelDelete: PropTypes.func
  };

export default function BoxDelete({itemName, confirmDelete, cancelDelete}) {
    
    return (
        <div className="box-delete">
            <p>Deseja apagar {itemName}?</p>
            <div className="buttonsConfirm">
              <button className="button is-danger" onClick={confirmDelete}>Ok</button>
              <button className="button" onClick={cancelDelete}>Cancelar</button>
            </div>
        </div>
    )
}