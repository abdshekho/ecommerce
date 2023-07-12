import React, { useEffect, useState } from 'react'
import { Button, Input, Textarea, Select, Option } from '@material-tailwind/react'
//multi Selected
import Select2 from 'react-select';
import makeAnimated from 'react-select/animated';
import add from "../../images/add.png"
//https://www.npmjs.com/package/react-multiple-image-input
import MultiImageInput from 'react-multiple-image-input';
import { getAllCategory } from "../../redux/actions/categoryAction"
import { getAllBrand, getOneBrand } from "../../redux/actions/brandAction"
import { getOneCategory } from "../../redux/actions/subCategoryAction"
// import {  } from "../../redux/actions/subCategoryAction"
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../utility/Spinner';
import { CompactPicker } from 'react-color'
import { createProduct, getOneProduct } from '../../redux/actions/productsAtion';
import { notifyError, notifySuccess, notifyWarning } from '../../hook/useNotification';
import { ToastContainer } from 'react-toastify';
import ColorOfProduct from '../Products/ColorOfProduct';
import { useParams } from 'react-router-dom';
function TestOldAdminEditProducts() {
    const { id } = useParams();

    function dataURLtoFile( dataurl, filename ) {
        var arr = dataurl.split( ',' ),
            mime = arr[ 0 ].match( /:(.*?);/ )[ 1 ],
            bstr = atob( arr[ arr.length - 1 ] ),
            n = bstr.length,
            u8arr = new Uint8Array( n );
        while ( n-- ) {
            u8arr[ n ] = bstr.charCodeAt( n );
        }
        return new File( [ u8arr ], filename, { type: mime } );
    }



    const dispatch = useDispatch();
    const animatedComponents = makeAnimated();
    const [ images, setImages ] = useState( {} );
    const [ title, setTitle ] = useState( '' );
    const [ prodDescription, setProdDescription ] = useState( '' );
    const [ priceBefore, setPriceBefore ] = useState( 0 );
    const [ priceAfter, setPriceAfter ] = useState( 0 );
    const [ qty, setQty ] = useState( 0 );
    const [ subCatID, setSubCatID ] = useState( "" );
    const [ selectedID, setSelectedID ] = useState( "" );
    const [ selectBrand, setSelectBrand ] = useState( "" );
    const [ showColor, setShowColor ] = useState( false )
    const [ colors, setColors ] = useState( [] )

    //to subCategory multiSelect
    const [ options, setOptions ] = useState( [] )
    const [ loading, setLoading ] = useState( true )
    const [ isPress, setIsPress ] = useState( false )
    const item = useSelector( state => state.allproduts.oneProudct )

    useEffect( () => {
        const firstEnter = async () => {
            
            await dispatch( getOneCategory( id) )
            if ( item && item.length != 0 ) {

                setSelectedID( item.data.category )
                setTitle( item.data.title )
                setProdDescription( item.data.description )
                setPriceBefore( item.data.price )
                setQty( item.data.quantity )
                setSelectBrand( item.data.brand )
            }
        }
        firstEnter()
    }, [ item ] )
    useEffect( () => {
        
        dispatch( getOneProduct( id ) )
        dispatch( getAllCategory() )
        dispatch( getAllBrand() )


    }, [] )


    const category = useSelector( state => state.allCategory.category )
    const Brand = useSelector( state => state.allBrand.brand )
    const subCategory = useSelector( state => state.subCategory.subCategory )
    const loadingBrand = useSelector( state => state.allCategory.loading )
    const loadingCategory = useSelector( state => state.allCategory.loading )
    const products = useSelector( state => state.allproduts.prodcuts )
    const productsLoading = useSelector( state => state.allproduts.loading )

    const handelCategory = async ( e ) => {
        await dispatch( getOneCategory( item.data.category ) )
        setSelectedID( item.data.category )
    }
    const handelBrand = async ( e ) => {
        await dispatch( getOneBrand( item.data.brand ) )
        setSelectBrand( item.data.brand )
    }

    // to <select /> subCategory
    useEffect( () => {
        if ( subCategory.data && selectedID.length != 0 ) {
            const newList = subCategory.data.map( ( item ) => {
                return { value: item._id, label: item.name }
            } )
            setOptions( newList )
        }


    }, [ subCategory ] )


    const handelChangeComplete = ( color ) => {
        setColors( [ ...colors, color.hex ] )
        setShowColor( !showColor )

    }
    const removeColor = ( color ) => {
        const newColor = colors.filter( ( e ) => e !== color )
        setColors( newColor )

    }

    //
    const handelSubmite = async () => {
        if ( title.length < 2 || prodDescription < 2 || selectedID.length == 0 || priceAfter < 0 || priceBefore < 0 || images.length == 0 || selectBrand.length == 0 ) {
            notifyError( "Enter valid info" )
            return
        }
        if ( priceBefore < priceAfter ) {
            notifyError( "price after greate than price before" )
            return
        }
        //convert base 64 image to file
        const imgCover = dataURLtoFile( images[ 0 ], Math.random() + ".png" )

        //convert array of base 64 image to file
        const itemImages = Array.from( Array( Object.keys( images ).length ).keys() ).map(
            ( item, index ) => {
                return dataURLtoFile( images[ index ], Math.random() + ".png" )
            }
        )

        const formData = new FormData();
        formData.append( "title", title )
        formData.append( "description", prodDescription )
        formData.append( "category", selectedID )
        formData.append( "quantity", qty )
        formData.append( "price", priceBefore )
        formData.append( "imageCover", imgCover )
        formData.append( "brand", selectBrand )




        itemImages.map( ( item ) => formData.append( "images", item ) )
        colors.map( ( color ) => formData.append( "availableColors", color ) )
        subCatID.map( ( item ) => formData.append( "subcategory", item.value ) )
        setIsPress( true )
        setLoading( true )
        await dispatch( createProduct( formData ) )
        setLoading( false )

    }


    //onSend Date
    useEffect( () => {

        // if ( !loading && item) {
        //     setTitle( "" )
        //     setProdDescription( "" )
        //     setImages( {} )
        //     setPriceAfter( 0 )
        //     setPriceBefore( 0 )
        //     setQty( 0 )
        //     setShowColor( false )
        //     setColors( [] )
        //     setTimeout( () => setLoading( true ), 1500 )
        //     if ( products.status === 201 ) {
        //         notifySuccess( "Added successfully ..." )
        //     } else {
        //         notifyWarning( "invalid from Backend ..." )
        //     }
        //     setLoading( true )
        //     setIsPress( false )
        //     setSelectedID( item.data.category )
        // }
    }, [ loading ] )


    const testConsole = () => {
        console.log( "title", title )
        console.log( "description", prodDescription )
        console.log( "category", selectedID )
        console.log( "quantity", qty )
        console.log( "price", priceBefore )
        console.log( "brand", selectBrand )
    }
    return (
        <div className='container'>

            <h1 className='text-md md:text-xl  font-bold mb-1 pb-4 text-blue-gray-700'>Edit Proudct- {title}</h1>
            <div className='container bg-white py-4 rounded-lg'>
                <div className='max-w-[160px] flex flex-row items-center mx-auto'>
                    <MultiImageInput
                        images={ images }
                        setImages={ setImages }
                        allowCrop={ false }
                        theme="light"
                        // cropConfig={ { crop, ruleOfThirds: true } }
                        max={ 5 }
                    />

                </div>
                <div className='my-10'>
                    <div className='my-6'>
                        <Input label='Product name' onChange={ ( e ) => setTitle( e.target.value ) } value={ title } />
                    </div>
                    <div className='my-6'>
                        <Textarea label="Description of Product" onChange={ ( e ) => setProdDescription( e.target.value ) } value={ prodDescription } />
                    </div>
                    <div className='my-6'>
                        <Input label='Price after discount' onChange={ ( e ) => setPriceAfter( e.target.value ) } value={ priceAfter } type='number' />
                    </div>
                    <div className='my-6'>
                        <Input label='Product Price' type='number' onChange={ ( e ) => setPriceBefore( e.target.value ) } value={ priceBefore } />
                    </div>
                    <div className='my-6'>
                        <Input label='Available quantity' type='number' onChange={ ( e ) => setQty( e.target.value ) } value={ qty } />
                    </div>
                    <div className='flex my-6'>

                        <Select label="Main category" onChange={ ( e ) => handelCategory( e ) } value={ selectedID }>
                            { loadingCategory === false ?
                                category.data[ 0 ] ? (
                                    category.data.map( ( item ) => {
                                        return <Option key={ item._id } value={ item._id }>{ item.name } </Option>
                                    } )
                                ) : <Option value={ "nothing" }>"no options"</Option>
                                : <div><Spinner /></div>
                            }
                        </Select>
                    </div>
                    <div className='flex my-6 '>
                        <Select2
                            className='w-full'
                            closeMenuOnSelect={ false }
                            components={ animatedComponents }
                            isMulti
                            value={ subCatID }
                            options={ options }
                            placeholder="Sub category"
                            onChange={ ( e ) => setSubCatID( e ) }

                        />
                    </div>
                    <div className='flex my-6'>
                        <Select label="Brand" onChange={ ( e ) => handelBrand( e ) } value={ selectBrand } >
                            { loadingCategory === false && Brand ?
                                Brand.data ? (
                                    Brand.data.map( ( item ) => {
                                        return <Option key={ item._id } value={ item._id }>{ item.name } </Option>
                                    } )
                                ) : <Option value={ "nothing" }>"no options"</Option>
                                : <div><Spinner /></div>
                            }
                        </Select>
                    </div>
                    <div>Color of Product
                        <img src={ add } width="30px" className='cursor-pointer' alt='here' height="35px" onClick={ () => setShowColor( !showColor ) } />
                        <div className='flex mx-2 my-1'>
                            { colors.length > 0 ?
                                colors.map( ( item, index ) => {
                                    return <div key={ index } onClick={ () => removeColor( item ) }><ColorOfProduct color={ item } /></div>
                                    // return <div key={ index } onClick={ () => removeColor( item ) } className='w-[20px] h-[20px] rounded-full mr-4 shadow-2xl' style={ { backgroundColor: item, boxShadow: "gray 0px 12px 20px 0px" } }></div>
                                } )
                                : null }

                        </div>
                        { showColor ? <CompactPicker onChangeComplete={ handelChangeComplete } /> : null }

                    </div>
                    <Button className='mt-6' onClick={ handelSubmite }>Add and Save</Button>
                    <Button className='mt-6' onClick={ testConsole }>test</Button>
                </div>

                {
                    isPress ?
                        loading ? <div className='m-10'><Spinner /></div> : <h4 className='m-10'>added complate new Products</h4>
                        : null
                }
            </div>
            <ToastContainer />
        </div>
    )
}

export default TestOldAdminEditProducts