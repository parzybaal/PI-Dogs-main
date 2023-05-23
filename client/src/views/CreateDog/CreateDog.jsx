import { useEffect, useState } from "react";
import style from "./CreateDog.module.css"
import validation from "./validations/validation";
import { createDog, getTemperaments } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const CreateDog = () => {

    const dispatch = useDispatch();
    const temperaments = useSelector(state => state.temperaments)

    const [newDog, setNewDog] = useState({
        name: "",
        weight: "",
        height: "",
        life_time: "",
        temperament: []
    })

    const [errors, setErrors] = useState({
        name: "",
        weight: "",
        height: "",
        life_time: "",
        temperament: []
    })

    useEffect(() => {
        dispatch(getTemperaments())
    }, [dispatch])

    const handleChange = (event) => {
        const prop = event.target.name
        const value = event.target.value

        setNewDog({
            ...newDog,
            [prop]: value
        })

        const validate = validation({
            ...newDog,
            [prop]: value
        })

        setErrors(validate)
    }

    const handleTemperaments = (event) => {
        const value = event.target.value

        if (!newDog.temperament.includes(value)) {
            setNewDog({
                ...newDog,
                temperament: [...newDog.temperament, value]
            })
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        dispatch(createDog({
            name: newDog.name,
            height: newDog.height.split(" ").join(" - "),
            weight: newDog.weight.split(" ").join(" - "),
            life_time: newDog.life_time.split(" ").join(" - "),
            temperament: newDog.temperament.join(", ")
        }));
    }

    return (
        <div>
            <NavLink to="/home">
                <button> Back </button>
            </NavLink>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Race:</label>
                    <input type="text" name="name" value={newDog.name} onChange={handleChange} />
                    {errors.name && <p className={style.error_span}>{errors.name}</p>}
                </div>

                <div>
                    <label htmlFor="">Height(cm):</label>
                    <div>
                        <input placeholder="min height - max height" type="text" name="height" value={newDog.height} onChange={handleChange} />
                        <span>Enter a min and max height</span>
                        {errors.height && <p className={style.error_span}>{errors.height}</p>}
                    </div>
                </div>

                <div>
                    <label htmlFor="">Weight(kg):</label>
                    <div>
                        <input placeholder="min weight - max weight" type="text" name="weight" value={newDog.weight} onChange={handleChange} />
                        <span>Enter a min and max weight</span>
                        {errors.weight && <p className={style.error_span}>{errors.weight}</p>}
                    </div>
                </div>

                <div>
                    <label htmlFor="">Life time(year):</label>
                    <div>
                        <input placeholder="min lifetime - max lifetime" type="text" name="life_time" value={newDog.life_time} onChange={handleChange} />
                        <span>Enter a min and max lifetime</span>
                        {errors.life_time && <p className={style.error_span}>{errors.life_time}</p>}
                    </div>
                </div>
                <div>
                    <label htmlFor="">Temperaments:</label>
                    <select onChange={handleTemperaments} name="temperament" id="">
                        {temperaments.map(temp => <option key={temp[0].id} value={temp[0].name} disabled={newDog.temperament.includes(temp[0].name)}>{temp[0].name}</option>)}
                    </select>
                </div>

                <div>
                    {
                        (Object.keys(errors).length > 0)
                            ? <button type="submit" disabled={true}>Create</button>
                            : <button type="submit" >Create</button>
                    }
                </div>

            </form>
        </div>
    )
};

export default CreateDog;