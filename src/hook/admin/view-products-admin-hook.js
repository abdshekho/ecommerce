import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllProductsPage } from "../../redux/actions/productsAtion";

function ViewProductsAdminHook() {

    const dispatch = useDispatch();
    useEffect( ( page ) => {
        dispatch( getAllProductsPage( page, 8 ) )
    }, [] )

    const allProducts = useSelector( state => state.allproduts.allproducts )
    let items = [];
    if ( allProducts ) {

        if ( allProducts.length != 0 ) {
            items = allProducts;
        } else
            items = []
    }
    return [ items ]


} export default ViewProductsAdminHook