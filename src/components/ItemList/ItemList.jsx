import Item from "../Item/Item"
import "./ItemList.css";
import portada from "../../imagenes/macarons.jpg";

const ItemList = ({items}) => {
  return ( 
    <>
    <div className="title-itemList">
      <h1>NUESTROS PRODUCTOS</h1>
    </div>
    <div className="container">
      {items.map(item =>
        <Item key={item.id} {...item}/>
      )}
    </div>
    </>
  )
};
export default ItemList;

