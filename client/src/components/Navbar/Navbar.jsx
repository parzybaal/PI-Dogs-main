import style from "./Navbar.module.css"
import SearchBar from "../SearchBar/SearchBar"
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { getTemperaments, filterByOrgin, orderDogs, filterByTemps } from "../../redux/actions/actions";
import { useState } from "react";

const Navbar = () => {

    const temps = useSelector(state => state.temperaments);
    const dispatch = useDispatch();
    const [filter, setFilter] = useState("");
    const [order, setOrder] = useState("");

    const handleClickTemps = () => {
        dispatch(getTemperaments())
    }

    const handleFilter = (event) => {
        const value = event.target.value
        setFilter(value)
        if (value === "all" || value === "bd" || value === "api") {
            dispatch(filterByOrgin(event.target.value))
        }
        else {
            dispatch(filterByTemps(value))
        }
    }

    const handleOrder = (event) => {
        setOrder(event.target.value)
        dispatch(orderDogs(event.target.value))
    }


    return (
        <div className={style.container}>
            <div className={style.buttons}>

                <div className={style.home}>
                    <NavLink to="/home">Home</NavLink>
                </div>

                <div className={style.create}>
                    <NavLink to="/create">Create</NavLink>
                </div>

                <div>
                    <SearchBar />
                </div>

                <div className={style.filters}>
                    <span className={style.opt}>Filter:</span>
                    <select value={filter} className={style.filter} name="filter" id="" onClick={handleClickTemps} onChange={handleFilter}>

                        <optgroup label="Origin">
                            <option value="all">All</option>
                            <option value="bd">Created</option>
                            <option value="api">In list</option>
                        </optgroup>

                        <optgroup label="Temperaments">
                            {temps.map(temp => <option key={temp[0].id} value={temp[0].name}>{temp[0].name}</option>)}
                        </optgroup>

                    </select>

                    <span className={style.opt}>Order:</span>
                    <select value={order} className={style.order} name="order" id="" onChange={handleOrder}>
                        <option value="ascendent">Ascendent</option>
                        <option value="descendent">Descendent</option>
                        <option value="weight min-max">Weight min-max</option>
                        <option value="weight max-min">Weight max-min</option>
                    </select>
                </div>
                <div className={style.logout}>
                    <NavLink to="/">Log out</NavLink>
                </div>
            </div>



        </div>
    )
};

export default Navbar;