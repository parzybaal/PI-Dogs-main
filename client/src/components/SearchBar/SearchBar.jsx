import style from "./SearchBar.module.css"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getDogByName } from "../../redux/actions/actions";




const SearchBar = () => {

    const dogsFiltered = useSelector(state => state.dogsfiltered)
    const dispatch = useDispatch();
    const [dogs, setDogs] = useState(dogsFiltered)
    const [dogFound, setDogFound] = useState(false)
    const [name, setName] = useState("");

    const handleChange = (event) => {
        setName(event.target.value)
    }

    useEffect(() => {
        setDogs(dogsFiltered)
    }, [dogsFiltered])

    const handleSearch = () => {
        dispatch(getDogByName(name))
        console.log(dogs)
        if (!dogs.length) {
            setDogFound(true)
        }
    }

    return (
        <div className={style.container}>
            <input className={style.input} onChange={handleChange} name="search" value={name} type="search" placeholder="Enter a name" />
            <button className={style.button} onClick={() => handleSearch()}> Search </button>
            {dogFound
                && <p>
                    Dog not found
                </p>
            }
        </div>
    )
}

export default SearchBar;