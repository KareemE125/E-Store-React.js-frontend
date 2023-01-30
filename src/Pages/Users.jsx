import React, { useEffect, useState } from 'react'
import ApiHelper from '../Helpers/ApiHelper.js'

import Loading from '../components/Loading'
import { TYPE } from '../components/RoundedCard.jsx';
import GridCards from '../components/GridCards.jsx';


export default function Users() {

  const [isLoading, setIsLoading] = useState(true)
  const [users, setUsers] = useState(true)
  
   
  function init() {
    ApiHelper.getAllUsers().then(result =>{
      setIsLoading(false);
      setUsers(result);
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
          : <GridCards items={users} type={TYPE.user}/>
    }
    </main>
  </>


}
