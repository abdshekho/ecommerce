import { Input, Select, Option, Button } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategory } from '../../redux/actions/categoryAction';
import { createSubCategory } from '../../redux/actions/subCategoryAction';
import { notifySuccess, notifyWarning } from '../../hook/useNotification';
import { ToastContainer } from 'react-toastify';
import Spinner from '../utility/Spinner';


function AdminAddSubCategory() {
    const [ id, setId ] = useState( "" )
    const [ name, setName ] = useState( "" )
    const [ loading , setLoadind ] = useState( true )
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch( getAllCategory() )
    },[])
    const category = useSelector( state => state.allCategory.category.data )
    const subCategory = useSelector( state => state.subCategory.subCategory )
    const loadingR = useSelector( state => state.allCategory.loading )

    const handelChange = ( e ) => {
        setId( e )
    }
    const handelSubmite = async ( e ) => {
        if(name === "" && id === ""){
            notifyWarning("Enter information")
            return
        }
        if(name === ""){
            notifyWarning("Enter sub category name")
            return
        }
        if(id === ""){
            notifyWarning("selecet category")
            return
        }
        if(subCategory){

            setLoadind(false)
            await dispatch(createSubCategory({name:name,category:id}))
                setLoadind(true)
                notifySuccess("Complate action")
                setName("")
                
                return
            
            // notifyWarning("something is error")

        }
        


    }

    return (
        <div className='container'>
            <h1 className='text-md md:text-xl  font-bold mb-1 pb-4 text-blue-gray-700'>Add new sub category</h1>

            <div className='container bg-white py-4 rounded-lg'>
                <div className='my-6'>
                    <Input label='sub category name' value={ name } onChange={ ( e ) => setName( e.target.value ) } />
                    <div className='flex my-6'>

                        <Select label="Category parent" onChange={ handelChange } >
                            { loadingR === false ?
                                category[ 0 ] ? (
                                    category.map( ( item ) => {
                                        return <Option key={ item._id } value={ item._id }>{ item.name } </Option>
                                    } )
                                ) : null
                                : <div><Spinner /></div>

                            }
                        </Select>
                    </div>
                    <Button className='ml-2' onClick={ handelSubmite }>Save</Button>
                </div>
            </div>
                {!loading?<div className='m-10'><Spinner/></div>:null}
            <ToastContainer />
        </div>
    )
}

export default AdminAddSubCategory