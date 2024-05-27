/* eslint-disable */

import React from 'react'
import list from '../../../public/booksList.json'

function FreeBook() {
const filteredData = list.filter((data)=> data.category === "free")
console.log('filtered Data  ', filteredData)
    return (
        <div>
    </div>
  )
}

export default FreeBook
