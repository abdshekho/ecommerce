import React from 'react'
import { Button, Input, Textarea, Select, Option } from '@material-tailwind/react'
//https://react-select.com/home nedded to proxy
import Select2 from 'react-select';
import makeAnimated from 'react-select/animated';
import add from "../../images/add.png"
//https://www.npmjs.com/package/react-multiple-image-input
import MultiImageInput from 'react-multiple-image-input';

import { CompactPicker } from 'react-color'
// import { createProduct, getOneProduct, updateProduct } from '../../redux/actions/productsAtion';
// import { notifyError, notifySuccess, notifyWarning } from '../../hook/useNotification';
import { ToastContainer } from 'react-toastify';
import ColorOfProduct from '../Products/ColorOfProduct';
import { useParams } from 'react-router-dom';
import AdminEditProductsHook from './../../hook/products/edit-products-hook'

function AdminEditProducts() {
    const { id } = useParams();
    const [ CatID, BrandID, onChangeDesName, onChangeQty, onChangeColor, onChangePriceAfter, onChangePriceBefor, onChangeProdName, showColor, category, brand, priceAftr, images, setImages, onSelect, onRemove, options, handelChangeComplete, removeColor, onSeletCategory, handelSubmit, onSeletBrand, colors, priceBefore, qty, prodDescription, prodName ] =
        AdminEditProductsHook( id );
    const animatedComponents = makeAnimated();
    let categorySelect = CatID !== "" && CatID.length !== 0 ? <Select label="Main category" onChange={ ( e ) => onSeletCategory( e ) } value={ CatID }>
        {
            category && category.data ? ( category.data.map( ( item ) => {
                return (
                    <Option value={ item._id } key={ item._id } >{ item.name }</Option>
                )
            } ) ) : <Option value='' > no options</Option>

        }
    </Select> : <div></div>
    return (
        <div className='container'>

            <h1 className='text-md md:text-xl  font-bold mb-1 pb-4 text-blue-gray-700'>Edit Proudct- { prodName }</h1>
            <div className='container bg-white py-4 rounded-lg'>
                <div className=''>
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
                        <Input label='Product name' onChange={ onChangeProdName } value={ prodName } />
                    </div>
                    <div className='my-6'>
                        <Textarea label="Description of Product" onChange={ onChangeDesName } value={ prodDescription } />
                    </div>
                    <div className='my-6'>
                        <Input label='Price after discount' onChange={ onChangePriceBefor } value={ priceBefore } type='number' />
                    </div>
                    <div className='my-6'>
                        <Input label='Product Price' type='number' onChange={ onChangePriceAfter } value={ priceAftr } />
                    </div>
                    <div className='my-6'>
                        <Input label='Available quantity' type='number' onChange={ onChangeQty } value={ qty } />
                    </div>
                    <div className='flex my-6'>

                        { categorySelect }
                    </div>
                    <div className='flex my-6 '>
                        <Select2
                            className='w-full'
                            placeholder="Sub category"
                            options={ options }
                            // onSelect={ onSelect }
                            // onChange={onSelect}
                            // onRemove={ onRemove }
                            // defaultValue={ defaultOptions }
                            closeMenuOnSelect={ false }
                            components={ animatedComponents }
                            isMulti

                        />
                    </div>
                    <div className='flex my-6'>
                        <Select label="Brand" onChange={ ( e ) => onSeletBrand( e ) } value={ BrandID } >
                            {
                                ( brand && brand.length !== 0 && brand.data ) ? ( brand.data.map( ( item ) => {
                                    return (
                                        <Option value={ item._id } key={ item._id } >{ item.name }</Option>
                                    )
                                } ) ) : <Option value='' > no options</Option>

                            }
                        </Select>
                    </div>
                    <div>Color of Product
                        <img src={ add } width="30px" className='cursor-pointer' alt='here' height="35px" onClick={ onChangeColor } />
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
                    <Button className='mt-6' onClick={ handelSubmit }>Add and Save</Button>
                </div>


            </div>
            <ToastContainer />
        </div>
    )
}

export default AdminEditProducts