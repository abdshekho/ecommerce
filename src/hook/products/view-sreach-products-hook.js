import { useDispatch, useSelector } from "react-redux"
import { getAllProductsSearch } from "../../redux/actions/productsAtion";

function ViewSreachProductsHook() {
    let limit = 8;
    const dispatch = useDispatch();
    let wordL = "";
    const getProduc = () => {

        // if ( localStorage.getItem( "searchWord" ) != null ){
        // }

        sortData();

        const getAsync = async () => {
            getStorge();
            await dispatch( getAllProductsSearch( `sort=${sort}&limit=${limit}&keyword=${wordL}&${queryCat}&${brandCat}${pricefromString}${priceToString}` ) )
        }
        getAsync()


    }
    // useEffect( () => {
    //     getProduc( "" )
    // }, [] )

    const allProducts = useSelector( state => state.allproduts.allproducts )
    let items = [];

    if ( allProducts ) {

        if ( allProducts.length !== 0 ) {
            items = allProducts;
        } else
            items = []
    }

    let pricefromString = "", priceToString = ""
    let queryCat = "", brandCat = "", priceTo = "", priceFrom = "";
    //to pagination
    const getPage = async ( page ) => {

        getStorge()
        sortData();
        await dispatch( getAllProductsSearch( `sort=${sort}&limit=${limit}&page=${page}&keyword=${wordL}&${queryCat}&${brandCat}${pricefromString}${priceToString}` ) )
    }
    const getStorge = () => {
        if ( localStorage.getItem( "searchWord" ) != null )
            wordL = localStorage.getItem( "searchWord" )


        if ( localStorage.getItem( "catCecked" ) != null )
            queryCat = localStorage.getItem( "catCecked" )
        if ( localStorage.getItem( "brandCecked" ) != null )
            brandCat = localStorage.getItem( "brandCecked" )
        if ( localStorage.getItem( "priceTo" ) != null )
            priceTo = localStorage.getItem( "priceTo" )
        if ( localStorage.getItem( "priceFrom" ) != null )
            priceFrom = localStorage.getItem( "priceFrom" )

        if ( priceFrom === "" || priceFrom <= 0 ) {
            pricefromString = ""
        } else {
            pricefromString = `&price[gt]=${priceFrom}`
        }

        if ( priceTo === "" || priceTo <= 0 ) {
            priceToString = ""
        } else {
            priceToString = `&price[lte]=${priceTo}`
        }
    }

    let sortType = ""; let sort = ""
    //when user choose sort 
    const sortData = () => {
        if ( localStorage.getItem( "sortType" ) != null ) {
            sortType = localStorage.getItem( "sortType" );
        } else {
            sortType = ""
        }
        if ( sortType === "Without sort" ) {
            sort = ""
        }
        if ( sortType === "Best seller" ) {
            sort = "-sold"
        }
        if ( sortType === "Price from above" ) {
            sort = "-price"
        }
        if ( sortType === "Highest rated" ) {
            sort = "+quantity"
        }
        if ( sortType === "Price from the lowest" ) {
            sort = "+price"
        }

    }
    return [ items, getPage, getProduc ]


} export default ViewSreachProductsHook