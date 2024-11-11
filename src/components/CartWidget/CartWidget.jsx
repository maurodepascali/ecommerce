import React, { useEffect } from "react";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import {Link} from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import "./CartWidget.css";
const CartWidget = () => {

    const {cantidad} = useCartContext();

  return (
    <>
    <Link to="/cart">
      <IconButton>
        <Badge badgeContent= {cantidad} color="secondary"> 
          <ShoppingCartIcon  className="shop"/>
        </Badge>
      </IconButton>
    </Link>
    </>
  );
};
export default CartWidget;