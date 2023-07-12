import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOneProduct, getProductLike } from '../../redux/actions/productsAtion'
import { getOneCategoyr } from '../../redux/actions/categoryAction'
import { getOneBrand } from '../../redux/actions/brandAction'

function ViewProductDetailsHook( productID ) {
    const dispatch = useDispatch()
    useEffect( () => {
        const get = async () => {

            await dispatch( getOneProduct( productID ) );

        }
        get();

    }, [productID] )

    const oneProduct = useSelector( state => state.allproduts.oneProudct )
    let items = [];
    if ( oneProduct ) {

        if ( oneProduct.length !== 0 ) {
            items = oneProduct.data;
        } else
            items = []
    }


    useEffect( () => {
        if ( items )
            if ( items.length !== 0 ) {
                const get = async () => {
                    await dispatch( getOneCategoyr( items.category ) )
                    await dispatch( getOneBrand( items.brand ) )
                    await dispatch( getProductLike( items.category ) )
                }
                get();
            }
    }, [ items ] )

    const oneCategory = useSelector( state => state.allCategory.onCategory )
    let category = [];
    if ( oneCategory ) {
        if ( oneCategory.length !== 0 ) {
            category = oneCategory.data.name;
        } else
            category = []
    }

    const oneBrand = useSelector( state => state.allBrand.oneBrand )
    let brand = [];
    if ( oneBrand ) {
        if ( oneBrand.length !== 0 ) {
            brand = oneBrand.data.name;
        } else
            brand = []
    }

    const produtLike = useSelector( state => state.allproduts.productLike )

    return [ items, category, brand, produtLike ]



}

export default ViewProductDetailsHook