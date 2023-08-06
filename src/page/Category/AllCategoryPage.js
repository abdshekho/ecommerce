import CategoryCard from "../../Component/Category/CategoryCard";
import Pagination from "../../Component/utility/Pagination";
// import clothes from "../../images/clothe.png";
// import laptop from "../../images/labtop.png"
// import cat2 from "../../images/cat2.png"
// import pic from "../../images/pic.png"
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategory, getAllCategoryPage } from '../../redux/actions/categoryAction';
import Spinner from '../../Component/utility/Spinner';
import { Skeleton } from "@mui/material";

function AllCategoryPage() {
    const [ loadingCurrnet, setLoadingCurrent ] = useState( false )
    const arr = [ 1, 2, 3, 4, 5 ]
    const dispatch = useDispatch();

    useEffect( () => {
        const one = async () => {

            await dispatch( getAllCategoryPage( 1 ) )
        }
        setLoadingCurrent( true )
        one()
        setLoadingCurrent( false )
    }, [ dispatch ] )

    const getPage = async ( page ) => {
        setLoadingCurrent( true )
        await dispatch( getAllCategoryPage( page ) )
        setLoadingCurrent( false )
    }
    const category = useSelector( state => state.allCategory.category )
    const test = useSelector( state => state.allCategory.category )
    let numberOfPages = 0
    if ( test && test.paginationResult )
        numberOfPages = test.paginationResult.numberOfPages



    return (
        <div className="container ">
            <h1 className='text-xl md:text-2xl bg-[#474751] text-white p-2 text-center mb-20' style={ { boxShadow: "0px 6px 0px 0px #2196f3" } }>All categories</h1>
            <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
                { !loadingCurrnet ?
                    category && category.data ? category.data.map( item => {
                        return <CategoryCard srcImg={ item.image } title={ item.name } id={ item._id } key={ item._id } />;

                    } ) : <h3>no item yet</h3>
                    :
                    arr.map( () => {
                        return (
                            <div>
                                <Skeleton variant="rounded" height={ 170 } style={ { maxWidth: "220px" } } />
                                <Skeleton variant="text" height={ 60 } style={ { maxWidth: "220px", marginTop: "10px" } } />
                            </div>
                        )
                    } )
                    // <div><Spinner /></div>
                }
                {/* <CategoryCard srcImg={ clothes } title="categorys" />
                <CategoryCard srcImg={ cat2 } title="categorys" />
                <CategoryCard srcImg={ laptop } title="categorys" />
                <CategoryCard srcImg={ pic } title="categorys" />
                <CategoryCard srcImg={ clothes } title="categorys" />
                <CategoryCard srcImg={ laptop } title="categorys" />
                <CategoryCard srcImg={ cat2 } title="categorys" />
                <CategoryCard srcImg={ laptop } title="categorys" />
                <CategoryCard srcImg={ pic } title="categorys" /> */}
            </div>
            { numberOfPages > 1 ? <Pagination pageCount={ numberOfPages } onPress={ getPage } /> : null }


        </div>
    );
}

export default AllCategoryPage