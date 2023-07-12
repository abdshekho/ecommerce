import React, { useEffect, useState } from 'react'
import avatar from "../../images/avatar.png"
import { Button, Input } from '@material-tailwind/react'
// import axios from 'axios'
import { useDispatch } from 'react-redux'
import { createCategory } from '../../redux/actions/categoryAction'
// import { useSelector } from 'react-redux'
import Spinner from '../utility/Spinner'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notifyError,notifySuccess } from '../../hook/useNotification'

// import baseUrl from '../../Api/baseURL'
// import { useInsertDataWithImage } from '../../hooks/useInsertData'

function AdminAddCategory() {

    const dispatch = useDispatch();
    const [ img, setImg ] = useState( avatar )
    const [ name, setName ] = useState( "" )
    const [ slectedFile, setSlectedFile ] = useState( null )
    const [ loading, setLoadind ] = useState( true )
    const [ isPress, setIsPress ] = useState( false )
    //to get state of loading from redux
    // const loading = useSelector( state => state.allCategory.loading )


    function onImageChange( event ) {
        if ( event.target.files && event.target.files[ 0 ] )

            setImg( URL.createObjectURL( event.target.files[ 0 ] ) )
        setSlectedFile( event.target.files[ 0 ] )

    }


    const handelSubmite = async ( event ) => {
        event.preventDefault();
        if ( name === "" || img === avatar ) {
            notifyError( 'empty fields ..')
            return
        }

        const formData = new FormData();
        //name and image are same key in backend when i POST
        formData.append( "name", name )
        formData.append( "image", slectedFile )

        setLoadind( true )
        setIsPress( true )
        await dispatch( createCategory( formData ) );
        setLoadind( false )

        notifySuccess('add actions is successfully')
    }

    useEffect( () => {
        if ( !loading ) {
            setImg( avatar )
            setName( "" )
            setSlectedFile( null )
            setLoadind( true )
            setIsPress( false )
        }
    }, [ loading ] )

    return (
        <div className='container'>
            <h1 className='text-md md:text-xl  font-bold mb-1 pb-4 text-blue-gray-700'>Add new Category</h1>
            <div className='container bg-white py-4 rounded-lg'>

                <div className='max-w-[160px] flex flex-col items-center'>
                    { img === avatar ? <span className='text-gray-500'>photo of Category</span> : null }
                    <label htmlFor='upload-photo' className='cursor-pointer'>
                        <img src={ img } alt='' />
                    </label>
                    <input id='upload-photo' type='file' name='photo' onChange={ onImageChange } className='hidden' />
                </div>

                <div className='my-10'>

                    <Input label='Category name' onChange={ ( e ) => setName( e.target.value ) } value={ name } />
                    <Button className='mt-6' onClick={ handelSubmite }>Save Edite</Button>
                </div>

            </div>
            {
                isPress ?
                    loading ? <div className='m-10'><Spinner /></div> : <h4 className='m-10'>added complate new category</h4>
                    : null
            }


            <ToastContainer />

        </div>
    )
}

export default AdminAddCategory