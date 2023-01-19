import "./SearchBar.css"
export default function SearchBar({query,setQuery,fetchWeather}){
    return(<div className="search-box">
       <input type="text"
              placeholder="Search..."
       className="search-bar"
       onChange={(e)=>setQuery(e.target.value)}
       value={query}
       onKeyPress={fetchWeather}/>
    </div>)
}