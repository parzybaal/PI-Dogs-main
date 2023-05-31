import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getDetailDog, cleanDogById, deleteDog } from "../../redux/actions/actions"
import style from "./Detail.module.css"
const Detail = () => {

    const { id } = useParams();
    const dog = useSelector(state => state.dogById)
    const dispatch = useDispatch()
    const [deleteState, setDeleteState] = useState(true)

    const handleDelete = () => {
        dispatch(deleteDog(id))
        setDeleteState(false)
    }

    useEffect(() => {
        if (deleteState) {
            dispatch(getDetailDog(id))
        }
        return () => dispatch(cleanDogById())
    }, [dispatch, id, deleteState])

    return (
        <div className={style.container}>

            {deleteState
                &&
                <div className={style.delete_container}>
                    <button onClick={() => handleDelete()} className={style.delete}>Delete</button>
                </div>
            }

            {!deleteState
                &&
                <div className={style.delete_message}>
                    <p>The dog was sucefully DELETED</p>
                </div>
            }

            {deleteState
                &&
                dog.name
                ? <div className={style.div_container}>

                    <div className={style.title}>
                        <h1>{dog.name}</h1>
                    </div>

                    <div className={style.image_inside_container}>
                        {
                            dog.createdApi
                                ? <img className={style.image} src="https://images.theconversation.com/files/521751/original/file-20230419-18-hg9dc3.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" alt="dog_image" />
                                : <img className={style.image} src={dog?.image} alt="dog_image" />
                        }
                    </div>

                    <h3 className={style.id}>ID: {dog?.id}</h3>

                    <p className={style.text}>Height (cm): {dog?.height}</p>

                    <p className={style.text}>Weight (kg): {dog?.weight}</p>

                    <p className={style.text}>
                        Temperaments: {(dog.createdApi
                            ? dog.temperaments.map((temps, index) => `${temps.name}${index !== dog.temperaments.length - 1 && ", "}`)
                            : dog.temperament)}</p>
                    <p className={style.text}>Lifetime: {dog?.life_time}</p>

                </div>
                : deleteState && <div className={style.loading}>WASHING PUPPIES...</div>
            }
        </div>
    )
}

export default Detail;