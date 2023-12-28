import ItemsList from "./ItemsList";
import Offer from "./Offer"
import "./menu.css";
function Menu() {
  return (
    <div className="menu">
     
      <Offer/>
        <ItemsList/>
      </div>
    // </div>
  );
}

export default Menu;