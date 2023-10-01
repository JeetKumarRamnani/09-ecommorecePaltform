import React from 'react'

function SearchInput() {
  return (
    <div className="Input-Container flex-1 flex bg-white text-black border-1 p-2 rounded-lg font-normal">
            <input type="text" placeholder='Search In Daraz' className='flex-1 text-sm outline-none '/>
            <button className="px-2 rounded-md bg-[#FFE1D2]"><i className="fa-solid fa-magnifying-glass text-[#F85606]"></i></button>
    </div>
  )
}

export default SearchInput