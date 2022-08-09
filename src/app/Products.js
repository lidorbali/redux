import React from "react" 
import { useSelector, useDispatch } from 'react-redux';
import {selectTotal, selectMyProducts,selctWaga,selctconnect
} from './ProductSlice';

const Products = () => {
const myTotal = useSelector(selectTotal);
const myProducts = useSelector(selectMyProducts);  
const  myWaga = useSelector(selctWaga)
const myConnect= useSelector(selctconnect)
    return (<div>
  {myConnect ? "true":"fals"}
        
        {myProducts}
        {myWaga},
    
    {myProducts.map(prod=> <div></div>)}</div>

  )
}

export default Products