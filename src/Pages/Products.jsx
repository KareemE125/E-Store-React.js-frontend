import React, { useEffect, useState } from 'react'
import ApiHelper from '../Helpers/ApiHelper.js'

import Loading from '../components/Loading'
import { TYPE } from '../components/RoundedCard.jsx';
import GridCards from '../components/GridCards.jsx';


export default function Users() {

  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState(true)



  async function init() {
    const result = await ApiHelper.getAllProducts();

    setProducts(result)
    setIsLoading(false);
  }

  useEffect(() => {
    init();
  }, [])


  return <>
    <main>
      {
        isLoading
          ? <Loading></Loading>
          : products?.message
            ? <section className='mx-auto my-20 text-center text-2xl text-yellow-300'>{products.message}</section>
            : <GridCards items={products} type={TYPE.product} />
      }
    </main>
  </>


}
