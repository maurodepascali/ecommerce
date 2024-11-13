import React from 'react';
import { Link} from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import "./Cart.css";
import vacio from "../../imagenes/vacio.png";

export const Cart = () => {

  const {cart, removeItem, removeAllItems, getTotal} = useCartContext();

  if(!cart.length) return (
  <div className= "CartVacio">
    <Link to="/">
      No tienes ningún producto en tu carrito. Haz click aquí para realizar su compra.
    </Link>
    <div className="image-CartVacio">
      <img src={vacio}/>
    </div>
  </div>
 
 )
    return (

    <div className="cart">
      <h1 className= "titulo">CARRITO DE COMPRAS</h1>
        <div className= "productCart">
          {cart.map((item) => {
            return (
              <div className="container-detail2">           
                  <div className="cart-left">
                    <img className="cart-image" src={item.image}/>
                  </div>

                  <div className="cart-center">
                    <div className="row">
                      <h6 className="cart-title">{item.name}</h6>
                    </div>

                    <div className="row">
                      <p className="cart-price">Precio: ${item.price}</p>
                    </div>
                
                    <div className="row">
                      <p className="cart-cant">Cantidad: {item.cantidad}</p>
                    </div>
                  </div>

                  <div className="cart-right">
                    <Button onClick={()=>removeItem(item.id)} className= "removeButton"><DeleteIcon/></Button>
                  </div> 
            </div>
                  )}
                )}
        </div>
                
                <div className="comprar">
                  <div className="comprar-left">
                    <Button onClick={(removeAllItems)}><DeleteIcon/>VACIAR CARRITO</Button> 
                  </div>

                  <div className="comprar-center">
                    <p>Total: ${getTotal}</p>
                  </div>

                  <div className="comprar-right">
                    <Button variant="contained" color="primary">
                      <Link to="/checkout" className="linkCart">
                        <p>COMPRAR</p>
                      </Link>
                    </Button>
                  </div>
                </div>
                


                
              
            
           

            
              
        
        
    </div>
  )
};
export default Cart;