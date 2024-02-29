import React, { useContext, useState } from 'react'
import { CityContext } from "../utils/CityContext";
import useSearch from '../utils/Hooks/useSearch';

const Search = () => {
  
  const {  setCityName } = useContext(CityContext);
  const[search,setSearch]=useState('')
  const[searchOption,setSearchOption]=useState(null)
  const[focus,setFocus]=useState(false)
  useSearch(search,setSearchOption)
  



  return (
    <div className='relative flex justify-center '>
  <input onClick={()=>setFocus(true)   } onMouseDown={()=>setFocus(false)}
    className='w-1/2  rounded-lg border border-gray-300 px-2 py-1 focus:outline-none focus:border-blue-500'
    type='text'
    placeholder='Search'
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
  {focus?<div className='absolute top-full left-[22%] w-1/2'>
    <div className='bg-white rounded-lg '>
      <ul>
        
          {searchOption&&searchOption.map((options) => (
            <li 
            
              onClick={() => {
                setSearch(options.city)
                setFocus(false);
              }}
              className='py-1 px-2 cursor-pointer hover:bg-gray-100'
              key={options?.id}
            >
              {options?.city}, {options?.countryCode}
            </li>
          ))}
      </ul>
    </div>
  </div>:null}
  <button
    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-lg 
    '
    type='submit'
    onClick={(e)=>{
      e.preventDefault()
      setFocus(false)
    setCityName(search)
    }}
  >
    Search
  </button>
</div>


  )
}

export default Search

//  <select className='w-6 rounded-lg border border-gray-300 px-2 py-1 focus:outline-none focus:border-blue-500' onChange={handleSelectChange}>
//       <option value=""></option>
//       {searchOption && searchOption.map((options, index) => (
//         <option key={options?.id} value={options?.city}>
//           {options?.city} {options?.countryCode}
//         </option>
//       ))}
//     </select> 