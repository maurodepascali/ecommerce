import { useContext } from 'react';
import {createContext, useState, useEffect} from 'react';
import Swal from 'sweetalert2';
import { getFirestore } from '../firebase/cliente';
import firebase from 'firebase/app';

export const CartContext = createContext({});
export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {

    const [cart, setCart]= useState([]);
    const [cantidad, setCantidad] = useState(0);
    const [productsInCart, setProductsInCart]= useState(0);
    const [providerLoading, setProviderLoading]= useState(true); 
    
    const realStock = product => {
        const foundItem = cart.find(e => e.id === product.id);
        return foundItem ? product.stock - foundItem.cantidad : product.stock;
    }
 
    const getTotal= cart.reduce((aux, {cantidad,price})=> aux + cantidad * price, 0).toFixed(2);

    
    async function updateStock (newOrder){
    const db = getFirestore();
    const updateProducts = db.collection("productos")
    .where(firebase.firestore.FieldPath.documentId(), 'in', newOrder.item.map(element => element.id))
    
    const query = await updateProducts.get();
    const batch = db.batch();
    const outOfstock = [];
    
    query.docs.forEach((docSnapshot, index) => {
        if(docSnapshot.data().stock >= newOrder.item[index].cantidad){
            batch.update(docSnapshot.ref, {stock: docSnapshot.data().stock - newOrder.item[index].cantidad})
        }else{
            outOfstock.push({...docSnapshot.data(), id: docSnapshot.id})
        }
        })

        if(outOfstock.length === 0){
            await batch.commit();
        }else{
            Swal.fire("Algunos productos no tienen stock")
        }
    }

    const createOrder = (name,phone,email) => {
        const newOrder = {buyer:{name,phone,email}, item:cart, total:getTotal}
        const db = getFirestore();
        const orders = db.collection("orders");
        orders.add(newOrder).then(({id})=>{
            Swal.fire(`Muchas gracias por su compra. Número de orden: ${id}`);
            removeAllItems();
            updateStock(newOrder);
           
            function mensaje() {
                Swal.fire(`Volverá al menú principal`);
                    window.location = '/';
               }
               setTimeout(mensaje,5000);
        })
        .catch(e=>{
            Swal.fire("Ha ocurrido un error");
        })
    }

    //agrega cantidad de productos en carrito navbar
    useEffect(() => {
        const cant = cart
          .map((element) => element.cantidad)
          .reduce((a, b) => a + b, 0);
          setCantidad(cant);
        },[cart])
    
    const isInCart = id => cart.some(item => item.id === id);

    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)){
            const newCart = cart.map(cartElement => {
                if (cartElement.id === item.id){
                    return {...cartElement, cantidad : cartElement.cantidad + cantidad}
                }else return cartElement;
            })
            setCart(newCart);
        }else{
            setCart(prev => [...prev, {...item, cantidad}]);
        };
    };

    const removeAllItems = () => { 
        setCart([])
    } 

    const removeItem = (id) => {
    setCart(cart.filter(item => item.id !==id));
    }

    useEffect(() =>{
        const localCart = localStorage.getItem("cart");
        if(!localCart) localStorage.setItem("cart", JSON.stringify([]));
        else setCart(JSON.parse(localCart));
        setProviderLoading(false);
    },[]);

    useEffect(() =>{
        localStorage.setItem("cart", JSON.stringify(cart));
        const inCart = cart.reduce((acc,item) =>{
            return acc + item.cantidad;
        },0);
        setProductsInCart(inCart);
    },[cart]);
      
    return (
        <CartContext.Provider value={{createOrder,getTotal, removeItem, realStock, isInCart, removeAllItems,cart, setCart, addToCart, cantidad}}>
           {children}
        </CartContext.Provider>
    )
}