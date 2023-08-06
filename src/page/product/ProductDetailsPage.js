import NavOfProduct from '../../Component/Products/NavOfProduct'
import SlideShowProduct from '../../Component/Products/SlideShowProduct'
import DetailsProduct from '../../Component/Products/DetailsProduct'
import RateContainer from '../../Component/RateContainer/RateContainer'
import CardProductsContainer from '../../Component/Products/CardPrandsContainer'
import { useParams } from 'react-router-dom'
import ViewProductDetailsHook from '../../hook/products/view-product-details-hook'
import CardContainerHook from '../../hook/products/Card-container-hook'
import { Skeleton } from '@mui/material'
// import mobile from "../../images/mobile1.png";


function ProductDetailsPage() {
    const { id } = useParams();
    const [ item, category, brand, produtLike, loading ] = ViewProductDetailsHook( id );
    const [ favProduct ] = CardContainerHook()



    let images = []
    let prodcutsLike = []
    if ( item && category && produtLike && brand ) {
        if ( item && category && produtLike.length !== 0 && brand ) {

            images = item.images
            var rateQty = item.ratingsQuantity
            var rateAvg = item.ratingsAverage ? item.ratingsAverage : 0

            prodcutsLike = produtLike.data.slice( 0, 4 )
        }
    }
    return (
        <div className=''>
            <NavOfProduct />
            <div className='container   flex flex-col gap-5 md:grid-cols-12 md:grid  mt-10 items-center'>
                <div className='col-span-4 p-10 md:p-2 md:w-[90%] bg-white  rounded-3xl shadow-2xl'>
                    { !loading ?
                        <SlideShowProduct images={ images } />
                        :
                        <div>
                            <Skeleton variant="rounded" height={ 500 } className='w-[300px] md:w-[90%] m-auto' />
                            <div className='flex gap-2 mt-10 ml-2'>
                                <Skeleton variant="rounded" height={ 40 } width={ 40 } />
                                <Skeleton variant="rounded" height={ 40 } width={ 40 } />
                                <Skeleton variant="rounded" height={ 40 } width={ 40 } />
                                <Skeleton variant="rounded" height={ 40 } width={ 40 } />

                            </div>
                        </div>
                    }
                </div>
                <div className='col-span-8 mb-10 md:mb-0'>

                    <DetailsProduct loading={ loading } id={ item._id } title={ item.title } categoryId={ item.category } brandId={ item.brand } createdAt={ item.createdAt } sold={ item.sold } quantity={ item.quantity } category={ category } description={ item.description } price={ item.price } brand={ brand } colors={ item.availableColors } rateQty={ rateQty } rateAvg={ rateAvg } favProduct={ favProduct } />

                </div>
            </div>
            <div className='container bg-gray-100 p-6 rounded-3xl mt-10'>
                <RateContainer rateQty={ rateQty } rateAvg={ rateAvg } />
            </div>
            <div>
                <CardProductsContainer titleOfBar={ "relation products" } prodcuts={ prodcutsLike } />
            </div>
        </div>
    )
}

export default ProductDetailsPage