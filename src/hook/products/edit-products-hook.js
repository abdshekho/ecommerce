import  { useState, useEffect } from 'react'
// import { getOneCategoyr } from '../../redux/actions/categoryAction';
import {  getOneProduct } from '../../redux/actions/productsAtion';

import { useSelector, useDispatch } from 'react-redux';
import { getAllCategory } from '../../redux/actions/categoryAction';
import { getAllBrand } from '../../redux/actions/brandAction';
import { updateProduct } from '../../redux/actions/productsAtion';
import { notifyError, notifySuccess } from '../useNotification';
import { getSubDependCategory } from '../../redux/actions/subCategoryAction';



function AdminEditProductsHook( id ) {
    const dispatch = useDispatch();
    useEffect( () => {
        const run = async () => {
            await dispatch( getOneProduct( id ) )
            await dispatch( getAllCategory() );
            await dispatch( getAllBrand() );
        }
        run();
    }, [] )

    //get one product details
    const item = useSelector( ( state ) => state.allproduts.oneProudct )
    //get last catgeory state from redux
    const category = useSelector( state => state.allCategory.category )
    //get last brand state from redux
    const brand = useSelector( state => state.allBrand.brand )

    //get last sub cat state from redux
    const subCat = useSelector( state => state.subCategory.subCategory )





    const onSelect = ( selectedList ) => {
        setSeletedSubID( selectedList )
    }
    const onRemove = ( selectedList ) => {
        setSeletedSubID( selectedList )
    }

    const [ options, setOptions ] = useState( [] );

    //values images products
    const [ images, setImages ] = useState( [] );
    //values state
    const [ prodName, setProdName ] = useState( '' );
    const [ prodDescription, setProdDescription ] = useState( '' );
    const [ priceBefore, setPriceBefore ] = useState( 'السعر قبل الخصم' );
    const [ priceAftr, setPriceAftr ] = useState( 'السعر بعد الخصم' );
    const [ qty, setQty ] = useState( 'الكمية المتاحة' );
    const [ CatID, setCatID ] = useState( '' );
    const [ BrandID, SetBrandID ] = useState( '' );
    const [ subCatID, setSubCatID ] = useState( [] );
    const [ seletedSubID, setSeletedSubID ] = useState( [] );
    const [ loading, setLoading ] = useState( true );


    useEffect( () => {
        if ( item && item.data ) {

            setImages( item.data.images )
            setProdName( item.data.title )
            setProdDescription( item.data.description )
            setPriceBefore( item.data.price )
            setQty( item.data.quantity )
            setCatID( item.data.category )
            SetBrandID( item.data.brand )
            setColors( item.data.availableColors )
        }
    }, [ item ] )

    //to change name state
    const onChangeProdName = ( event ) => {
        event.persist();
        setProdName( event.target.value )
    }
    //to change name state
    const onChangeDesName = ( event ) => {
        event.persist();
        setProdDescription( event.target.value )
    }
    //to change name state
    const onChangePriceBefor = ( event ) => {
        event.persist();
        setPriceBefore( event.target.value )
    }
    //to change name state
    const onChangePriceAfter = ( event ) => {
        event.persist();
        setPriceAftr( event.target.value )
    }  //to change name state
    const onChangeQty = ( event ) => {
        event.persist();
        setQty( event.target.value )
    }
    const onChangeColor = ( event ) => {
        event.persist();
        setShowColor( !showColor )
    }

    //to show hide color picker
    const [ showColor, setShowColor ] = useState( false );
    //to store all pick color
    const [ colors, setColors ] = useState( [] );
    //when choose new color
    const handelChangeComplete = ( color ) => {
        setColors( [ ...colors, color.hex ] )
        setShowColor( !showColor )
    }
    const removeColor = ( color ) => {
        const newColor = colors.filter( ( e ) => e !== color )
        setColors( newColor )
    }



    //when selet category store id
    const onSeletCategory = async ( e ) => {
        setCatID( e )

    }
    useEffect( () => {

        const run = async () => {
            if ( CatID )

                await dispatch( getSubDependCategory( CatID ) )
        }
        run();

    }, [ CatID ] )

    useEffect( () => {
        if ( subCat && subCat !== 0 && subCat.length !== 0 && subCat.data) {
            console.log( subCat.data )

            setOptions( subCat.data.map( ( item ) => { return { value: item._id, label: item.name } } ) )
        }
    }, [ subCat ] )




    //when selet brand store id
    const onSeletBrand = ( e ) => {
        SetBrandID( e )
    }

    //to convert base 64 to file
    function dataURLtoFile( dataurl, filename ) {
        var arr = dataurl.split( ',' ),
            mime = arr[ 0 ].match( /:(.*?);/ )[ 1 ],
            bstr = atob( arr[ 1 ] ),
            n = bstr.length,
            u8arr = new Uint8Array( n );

        while ( n-- ) {
            u8arr[ n ] = bstr.charCodeAt( n );
        }

        return new File( [ u8arr ], filename, { type: mime } );
    }

    //convert url to file
    const convertURLtoFile = async ( url ) => {
        const response = await fetch( url, { mode: "cors" } );
        const data = await response.blob();
        const ext = url.split( "." ).pop();
        const filename = url.split( "/" ).pop();
        const metadata = { type: `image/${ext}` };
        return new File( [ data ], Math.random(), metadata );
    };

    //to save data 
    const handelSubmit = async ( e ) => {
        if ( true ) {

            e.preventDefault();
            if ( CatID === "" || prodName === "" || prodDescription === "" || images.length <= 0 || priceBefore <= 0 ) {
                notifyError( "من فضلك اكمل البيانات" )
                return;
            }

            let imgCover;
            if ( images[ 0 ].length <= 1000 ) {
                convertURLtoFile( images[ 0 ] ).then( val => imgCover = val )
            } else {
                imgCover = dataURLtoFile( images[ 0 ], Math.random() + ".png" )
            }

            let itemImages = []
            //convert array of base 64 image to file 
            Array.from( Array( Object.keys( images ).length ).keys() ).map(
                ( item, index ) => {
                    if ( images[ index ].length <= 1000 ) {
                        convertURLtoFile( images[ index ] ).then( val => itemImages.push( val ) )
                    }
                    else {
                        itemImages.push( dataURLtoFile( images[ index ], Math.random() + ".png" ) )
                    }
                } )

            const formData = new FormData();
            formData.append( "title", prodName );
            formData.append( "description", prodDescription );
            formData.append( "quantity", qty );
            formData.append( "price", priceBefore );

            formData.append( "category", CatID );
            formData.append( "brand", BrandID );



            setTimeout( () => {
                formData.append( "imageCover", imgCover );
                itemImages.map( ( item ) => formData.append( "images", item ) )
            }, 1000 );


            colors.map( ( color ) => formData.append( "availableColors", color ) )
            seletedSubID.map( ( item ) => formData.append( "subcategory", item._id ) )
            setTimeout( async () => {
                setLoading( true )
                await dispatch( updateProduct( id, formData ) )
                setLoading( false )
            }, 1000 );

            console.log( "_________________-" )
            console.log( "title", prodName );
            console.log( "description", prodDescription );
            console.log( "quantity", qty );
            console.log( "price", priceBefore );

            console.log( "category", CatID );
            console.log( "brand", BrandID );

            console.log( "this valu do map :: " )
            console.log( "colors", colors );
            console.log( "subcategory", seletedSubID );
            console.log( "brand", BrandID );
            console.log( "itemImages: ", itemImages );


        }
    }

    //get create meesage
    const product = useSelector( state => state.allproduts.updateProducts )


    useEffect( () => {

        if ( loading === false ) {

            if ( product ) {
                console.log( "its here222222" )
                if ( product.status === 200 ) {
                    notifySuccess( "Edit complete" )
                } else {
                    notifyError( "Error .. ..." )
                    return
                }
                // setColors( [] )
                // setImages( [] )
                // setProdName( '' )
                // setProdDescription( '' )
                // setPriceBefore( 'price Befor' )
                // setPriceAftr( 'price After' )
                // setQty( 'quantity' )
                // SetBrandID( "" )
                // setSeletedSubID( [] )
                setTimeout( () => setLoading( true ), 1500 )
            }

        }
    }, [ loading ] )


    return [ CatID, BrandID, onChangeDesName, onChangeQty, onChangeColor, onChangePriceAfter, onChangePriceBefor, onChangeProdName,
        showColor, category, brand, priceAftr, images, setImages, onSelect, onRemove, options, handelChangeComplete, removeColor,
        onSeletCategory, handelSubmit, onSeletBrand, colors, priceBefore, qty, prodDescription, prodName ]
}

export default AdminEditProductsHook 