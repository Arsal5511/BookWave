/* eslint-disable */

import React from 'react'
import list from '../../../public/booksList.json'

function FreeBook() {
const filteredData = list.filter((data)=> data.category === "free")
console.log('filtered Data  ', filteredData)
    return (
      <>
        <div className='mx-auto max-w-screen-2xl'> 
          <h1 className='text-xl pb-2 font-bold'>Free Offered Books</h1>
        </div>
      </>
    )
}

export default FreeBook
