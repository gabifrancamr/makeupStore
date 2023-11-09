import PropTypes from "prop-types";

Notification.propTypes = {
    message: PropTypes.string,
    onClose: PropTypes.func
}

export default function Notification({ message, onClose }) {
    return (
        <div className="notification">
          <p>{message}</p>
          <button className="button" onClick={onClose}>Fechar</button>
        </div>
      );
}