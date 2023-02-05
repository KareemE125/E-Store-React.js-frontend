import React from 'react'
import { useLocation } from 'react-router-dom'

export default function ProductsInfo() {
    
    const { state } = useLocation();
    const { product } = state;

    console.log('====================================');
    console.log(product);
    console.log('====================================');

    return <main>
        <div className='flex flex-col justify-between lg:px-20 xl:px-36'>
            <h1 className="text-2xl font-bold text-center mb-3">
                🛍️ Product #{product.id}
            </h1>
            <div className='overflow-hidden'>
                <h5 className="text-lg font-bold py-1 flex">
                    Title:
                    <p className='font-light truncate ml-1'> {product.name}</p>
                </h5>
                <h5 className="text-lg font-bold py-1">
                    Description: <br />
                    <p className='font-light pl-3'>
                        {product.description}
                    </p>
                </h5>
                <h5 className="text-lg font-bold py-1">
                    Price:
                    <span className='font-light'> ${product.price}</span>
                </h5>
            </div>


        </div>
    </main>

}
