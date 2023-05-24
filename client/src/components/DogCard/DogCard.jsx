import style from "./DogCard.module.css"
import { NavLink } from "react-router-dom"


const DogCard = (dogs) => {

    return (
        <div className={style.container}>
            {
                <div className={style.img}>
                    {
                        dogs.createdApi
                            ? <img className={style.image} src="https://images.theconversation.com/files/521751/original/file-20230419-18-hg9dc3.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" alt="dog_image" />
                            : <img className={style.image} src={dogs.image} alt="Dog" />
                    }
                </div>
            }
            <div className={style.name_container}>
                <NavLink className={style.name} to={`/detail/${dogs.id}`}>
                    <p>{dogs.name}</p>
                </NavLink>
            </div>
            <div className={style.temps}>
                <p>
                    Temperaments: {(dogs.createdApi
                        ? dogs.temperaments.map((temps, index) => `${temps}${index !== dogs.temperaments.length - 1 && ", "}`)
                        : dogs.temperament)}
                </p>
            </div>
            <div className={style.weight}>
                <p>Weight (kg): Min {dogs.weight} Max</p>
            </div>
        </div>
    )
}

export default DogCard;