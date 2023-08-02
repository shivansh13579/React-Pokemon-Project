import './Search.css'
function Search(){
    return(
        <div className='Search-wrapper'>
            <input
            id='pokemon-name-search'
            type="text"
            placeholder="pokedmon name...."
             />
        </div>
    )
}

export default Search;