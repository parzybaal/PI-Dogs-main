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

    orderDogs = false
    useEffect(() => {

        if (!orderDogs) {
            dispatch(getAllDogs())
        }
    }, [dispatch, orderDogs])

    let page = 1;
    const [currentPage, setCurrentPage] = useState(page);
    const dogsForPage = 8;
    const indexOfLastDog = currentPage * dogsForPage;
    const indexOfFirstDog = indexOfLastDog - dogsForPage;
    const dogsToShow = dogsfiltered.slice(indexOfFirstDog, indexOfLastDog)
    const totalPages = Math.ceil(dogsfiltered.length / dogsForPage)

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
        <div className={style.container}>
            <DogsContainer dogsToShow={dogsToShow} />

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                handlePageChange={handlePageChange}
            />
        </div>

    )
};

export default Home;