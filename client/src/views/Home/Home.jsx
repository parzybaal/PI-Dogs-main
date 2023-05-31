import DogsContainer from "../../components/DogsContainer/DogsContainer";
import style from "./Home.module.css"
import { useEffect, useState } from "react";
import { getAllDogs } from "../../redux/actions/actions"
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../components/Pagination/Pagination";



const Home = () => {
    let orderDogs = useSelector(state => state.orderDogs)
    const dogsfiltered = useSelector(state => state.dogsfiltered)
    const dispatch = useDispatch();

    let page = 1;
    const [currentPage, setCurrentPage] = useState(page);
    const dogsForPage = 8;
    const indexOfLastDog = currentPage * dogsForPage;
    const indexOfFirstDog = indexOfLastDog - dogsForPage;
    const dogsToShow = dogsfiltered.slice(indexOfFirstDog, indexOfLastDog)
    const totalPages = Math.ceil(dogsfiltered.length / dogsForPage)

    orderDogs = false

    useEffect(() => {
        if (!orderDogs) {
            dispatch(getAllDogs())
        }
    }, [dispatch, orderDogs])



    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (

        <div className={style.container}>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                handlePageChange={handlePageChange}
            />

            <DogsContainer dogsToShow={dogsToShow} />
        </div>

    )
};

export default Home;