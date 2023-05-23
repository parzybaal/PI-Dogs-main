import style from "./Pagination.module.css"


const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
    return (
        <div className={style.pagination}>

            <button className={style.button} disabled={currentPage === 1} onClick={() => handlePageChange(1)}>Start</button>

            <button className={style.button} disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>Previous</button>

            <span className={style.pageNumber}>Página: {currentPage}</span>

            <button className={style.button} disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}>Next</button>

            <button className={style.button} disabled={currentPage === totalPages} onClick={() => handlePageChange(totalPages)}>Last</button>

            <span className={style.totalPages}>[ {totalPages} ]</span>
        </div>
    )
}


export default Pagination;