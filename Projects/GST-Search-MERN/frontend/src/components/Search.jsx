import React from "react"

const Search = ({setSearchText, searchFunction}) => {  
  return (
    <form action="" className="flex items-center justify-center p-4 ">
        <input 
          type="text" 
          className="border rounded-lg w-1/2 h-10 mr-2 text-lg p-2 focus:bg-green-100 border-green-200" 
          onChange={(e ) => setSearchText(e.currentTarget.value)}
        />
        <button 
          className="h-10 w-20 ml-2 rounded border border-green-200 text-white bg-green-400 text-lg hover:bg-green-500" 
          onClick={(e) => searchFunction(e)}
        >
          Search
        </button>
    </form>
  )
}

export default Search