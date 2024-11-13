import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail/ItemDetail"
import { getFirestore } from "../firebase/cliente";


const ItemDetailContainer = () => {
  
    const {id} = useParams();
    const [item,setItem] = useState();
    const [loading, setLoading] = useState(true);
    
  useEffect(()=> {
    (async () => {
      const db = getFirestore(); //conexion base de datos
      const collection = db.collection("productos") //tomamos conexion
      const response = await collection.doc(id).get();
      setItem({id: response.id, ...response.data()})
      setLoading(false);
      })();
    },[id])

    if(loading || !item){
      return <h4>Cargando...</h4>
    }
    
  return (
      <ItemDetail product={item}/> 
  )
};
export default ItemDetailContainer;

