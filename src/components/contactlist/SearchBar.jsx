import style from '../../styles/search.module.css'
const SearchBar=(props)=>{
    return(
         <div className={style.searchBox}>
            <img  className={style.searchIcon} width="30px" alt="" height="30px" src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"/>
            <input className={style.inputBox} placeholder="Search" value={props.value} onChange={props.searchHandler}/>
         </div>
    )
}
export default SearchBar;