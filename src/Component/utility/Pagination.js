import ReactPaginate from 'react-paginate';
import "./style.css"
function Pagination() {
const handlePageClick = ()=> {}

    return (
        <div className="flex  gap-3 flex-wrap p-6 py-12 font-serif  justify-center items-center my-10">
            <ReactPaginate
                breakLabel="..."
                nextLabel="next"
                onPageChange={ handlePageClick }
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                pageCount={100}
                previousLabel="previous"
                containerClassName="flex p-3"
                pageClassName="page-item px-2"
                pageLinkClassName="page-link p-2"
                previousClassName="page-item"
                nextClassName='page-item'
                previousLinkClassName='page-link p-2'
                nextLinkClassName="page-link p-2"
                breakClassName="page-item"
                breakLinkClassName="page-link p-2"
                // activeClassName="activePageinate"
                activeLinkClassName='activePageinate'
                // renderOnZeroPageCount={ null }
            />
        </div>
    );
}

export default Pagination