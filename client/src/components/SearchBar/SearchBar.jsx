import style from "./SearchBar.module.css"
import { useState } from "react";
import { useDispatch } from "react-redux"
import { getDogByName } from "../../redux/actions/actions";


const SearchBar = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("")

    const handleChange = (event) => {
        setName(event.target.value)
    }

    const handleSearch = () => {
        dispatch(getDogByName(name))
    }

    return (
        <div className={style.container}>
            <input className={style.input} onChange={handleChange} value={name} type="search" placeholder="Enter a name" />
            <button className={style.button} onClick={() => handleSearch()}> Search </button>
        </div>
    )
}

export default SearchBar;