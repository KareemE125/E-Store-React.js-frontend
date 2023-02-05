import React from 'react'
import RoundedCard from './RoundedCard.jsx'

export default function GridCards(props) {
    const { items, type } = props

    return items
        ? <section className='grid grid-cols-12 gap-3'>
            {
                items.map(item => <div key={item.id} className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3'>
                    <RoundedCard item={item} type={type} />
                </div>)

            }
        </section>
        : <section className='mx-auto my-20 text-center text-2xl text-yellow-300'>No {type}s found</section>
}
