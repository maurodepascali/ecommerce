import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList/ItemList"
import { getFirestore } from "../firebase/cliente";

const ItemListContainer = () => {
  
  const{categoryName} = useParams();
  const[items, setItems] = useState([]);

  useEffect(()=>{
    (async () => {
      const db = getFirestore(); //conexion base de datos
      const collection = db.collection("productos") //tomamos conexion
      let itemCollection =  collection;
        if(categoryName) itemCollection = collection.where("category", "==", categoryName);
          const response = await itemCollection.get();
          setItems(response.docs.map(item =>({id: item.id, ...item.data()})))
    })();
  },[categoryName])

  return (
      <ItemList items={items}/>
  )
};
export default ItemListContainer;


