import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "../../redux/actions/productsAtion";

function ViewHomeProductsHook() {

    const dispatch = useDispatch();
    useEffect( () => {
        dispatch( getAllProducts( 4 ) )
    }, [] )

    const allProducts = useSelector( state => state.allproduts.allproducts )
    let items = [];
    if ( allProducts ) {

        if ( allProducts.length != 0 ) {
            items = allProducts.data.slice( 0, 4 );
        } else
            items = []
    }
    console.log( items )
    return [ items ]


} export default ViewHomeProductsHook