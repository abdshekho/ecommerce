import React from 'react'

function ColorOfProduct( { color } ) {
    return (

        <div>
            <div className='w-[20px] h-[20px] rounded-full mx-2 shadow-2xl' style={ { backgroundColor: color, boxShadow: "gray 0px 12px 20px 0px" } }>
            </div>

        </div>
    )
}

export default ColorOfProduct