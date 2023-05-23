import DogCard from "../DogCard/DogCard"
import style from "./DogsContainer.module.css"





const DogsContainer = ({ dogsToShow }) => {


    return (
        <div className={style.container}>
            {dogsToShow.map(dog =>
                dog.createdApi
                    ?
                    <DogCard
                        createdApi={dog.createdApi}
                        key={dog.id}
                        id={dog.id}
                        name={dog.name}
                        image={dog.image}
                        temperaments={dog.temperaments.map(temps => temps.name)}
                        weight={dog.weight}
                    />
                    :
                    <DogCard
                        key={dog.id}
                        id={dog.id}
                        name={dog.name}
                        image={dog.image}
                        temperament={dog.temperament}
                        weight={dog.weight}
                    />
            )}
        </div>
    )
}

export default DogsContainer;