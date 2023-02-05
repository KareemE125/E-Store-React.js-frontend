import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GridCards from '../components/GridCards.jsx';
import Loading from '../components/Loading.jsx';
import { TYPE } from '../components/RoundedCard.jsx';
import ApiHelper from '../Helpers/ApiHelper.js';

export default function UserProducts() {
    const { userId } = useParams();

    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState([])


    async function init() {
        const result = await ApiHelper.getProductsOfOwner(userId)

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
                    : products?.length > 0
                        ? <GridCards items={products} type={TYPE.product} />
                        : <section className='mx-auto my-20 text-center text-2xl text-yellow-300'>User has no products</section>
            }
        </main>
    </>
}
