import React, {useState } from 'react';
import accounting  from "accounting";
import ItemCount  from "../ItemCount/ItemCount";
import  {useCartContext}  from "../../Context/CartContext";
import "./ItemDetail.css";
import { ShoppingCart } from '@material-ui/icons';
import { Button } from '@material-ui/core';

const ItemDetail = ({product}) => {
  const {addToCart, realStock} = useCartContext();
  const [counter, setCounter] = useState(1); 
  const stock = realStock(product);
  
  const onAdd = cant => addToCart(product , cant);
  
  return (
    <div className="container-detail">
      <div className="row">
        <img 
          className="imagen-detail" 
          src={product.image} 
          alt={product.name}
        />   
        <h6 className="titulo-detail">{product.name}</h6>
        <p className="price-detail">Precio: ${product.price}</p>
        { 
          stock > 0 ? (
            <>
              <p className="stock-detail">Unidades disponibles: {stock}</p>
              <ItemCount stock={stock} onAdd={onAdd}/>
            </>
          ) : (
            <p className="stock-detail">Sin stock</p>
          )
        } 
      </div>
    </div>
  )
};
export default ItemDetail;

