import React, { useEffect, useState } from 'react'
import ApiHelper from '../Helpers/ApiHelper.js'

import Loading from '../components/Loading'
import { TYPE } from '../components/RoundedCard.jsx';
import GridCards from '../components/GridCards.jsx';


export default function Users() {

  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState(true)
  
   
  function init() {
    ApiHelper.getAllProducts().then(result =>{
      setIsLoading(false);
      setProducts(result);
      console.log(result);
    } );
  }

  useEffect(() => {
    init();
  }, [])


  return <>
    <main>
      {
        isLoading
          ? <Loading></Loading>
          : <GridCards items={products} type={TYPE.product}/>
    }
    </main>
  </>


}
