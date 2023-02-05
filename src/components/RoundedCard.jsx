import { Button, Card } from 'flowbite-react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export const TYPE = {
    user: 'user',
    product: 'product'
}

export default function RoundedCard(props) {

    const { item, type } = props;
    const navigate = useNavigate();

    return <Card>
        <div className={` ${type === TYPE.user && 'md:h-60'} flex flex-col justify-between`}>
            <h1 className="text-2xl font-bold text-center mb-3">
                {type === TYPE.user ? '🙋🏻‍♂️ User' : '🛍️ Product'} #{item.id}
            </h1>
            {
                type === TYPE.user
                    ? UserInfo(item)
                    : ProductInfo(item)
            }
            {
                type === TYPE.user
                    ? <Link className='mt-3 flex justify-center' to={`${item.id}/owned-products`}>
                        <Button>Show Products</Button>
                    </Link>
                    : <Button onClick={() => navigate("/products/info", { state: { product: item } })}>Display Info</Button>

            }

        </div>
    </Card>
}

function UserInfo(user) {
    return <div className='overflow-hidden'>
        <h5 className="text-lg font-bold py-1 flex">
            Name:
            <p className='font-light truncate ml-1'> {user.name}</p>
        </h5>
        <h5 className="text-lg font-bold py-1 flex">
            Email:
            <p className='font-light truncate ml-1'> {user.email}</p>
        </h5>
        <h5 className="text-lg font-bold py-1">
            Age:
            <span className='font-light'> {user.age}</span>
        </h5>
    </div>
}

function ProductInfo(product) {
    return <div className='overflow-hidden'>
        <h5 className="text-lg font-bold py-1 flex">
            Title:
            <p className='font-light truncate ml-1'> {product.name}</p>
        </h5>
        <h5 className="text-lg font-bold py-1">
            Description: <br />
            <p className='font-light line-clamp-4 pl-3'>
                {product.description}
            </p>
        </h5>
        <h5 className="text-lg font-bold py-1">
            Price:
            <span className='font-light'> ${product.price}</span>
        </h5>
    </div>
}