
import React, { useEffect, useState, useContext } from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import "./ItemCount.css";
import { Button } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

const ItemCount = ({stock, onAdd}) =>{
 
    const [counter, setCounter] = useState(stock ? 1 : 0); 
    /*
    const sumar = () => {
       if(counter<stock){
        setCounter(counter+1)
       }
    }

    const restar = () => {
        if(counter>1){
            setCounter(counter-1)
           }
    }
    */
    const onInputChange = (e) => {
        const inputValue = e.target.value;
        if (inputValue > stock) {
            setCounter(stock);
        } else if (inputValue < 0) {
            setCounter(1);
        } else {
            setCounter(inputValue);
        }
      }

    return (
        <>
    <div className="item-count">
        <IconButton onClick={()=> setCounter(counter -1 ? counter -1 : counter)}>
            <RemoveCircleIcon/>
        </IconButton>
        {counter}
        <IconButton onClick={()=> setCounter(counter === stock ? counter : counter +1)}>
            <AddCircleIcon/>
        </IconButton>
        </div>
        <div className="btn-add-Cart">
        <Button onClick={() => {onAdd(counter); setCounter(1)}} variant="contained" color="primary">
            < ShoppingCart fontSize='medium' /><p>Agregar al carrito</p>
        </Button>
        </div>
    
    </>
  );
}
export default ItemCount;

/*
<IconButton onClick={restar}>
    <RemoveCircleIcon/>
</IconButton>
    <input type="number" value={counter} onChange={onInputChange} />
<IconButton onClick={sumar}>
    <AddCircleIcon/>
</IconButton>
*/