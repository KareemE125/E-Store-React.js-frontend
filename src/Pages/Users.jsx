import React, { useEffect, useState } from 'react'
import ApiHelper from '../Helpers/ApiHelper.js'

import Loading from '../components/Loading'
import { TYPE } from '../components/RoundedCard.jsx';
import GridCards from '../components/GridCards.jsx';


export default function Users() {

  const [isLoading, setIsLoading] = useState(true)
  const [users, setUsers] = useState(true)


  async function init() {
    const result = await ApiHelper.getAllUsers();

    setUsers(result)
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
          : users?.message
            ? <section className='mx-auto my-20 text-center text-2xl text-yellow-300'>{users.message}</section>
            : <GridCards items={users} type={TYPE.user}/>
      }
    </main>
  </>


}
