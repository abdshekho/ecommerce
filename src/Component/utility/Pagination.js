import ReactPaginate from 'react-paginate';
import { useEffect } from 'react';
function Pagination( { pageCount, onPress } ) {

    const handlePageClick = ( data ) => {
        onPress( data.selected + 1 )

    }

    //to scroll top on Change pagination
    useEffect( () => {
        const body = document.querySelector( '#root' );
        body.scrollIntoView( {
            behavior: 'smooth'
        }, 500 )

    }, [ onPress ] );


    return (
        <div className="flex  gap-3 flex-wrap p-6 py-12 font-serif  justify-center items-center my-10">
            <ReactPaginate
                breakLabel="..."
                nextLabel="next"
                onPageChange={ handlePageClick }
                marginPagesDisplayed={ 2 }
                pageRangeDisplayed={ 2 }
                pageCount={ pageCount }
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