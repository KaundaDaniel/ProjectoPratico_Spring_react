import icone from "../../assets/img/notification-icon.svg"
import './style.css'
function NotificationButton() {
    return (
      <div className="dsmeta-red-btn">
        <img src={icone} alt="notification-icon" />
      </div>
      
    )
  }
  
  export default NotificationButton