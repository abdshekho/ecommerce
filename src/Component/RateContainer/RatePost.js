import { Button, Textarea } from '@material-tailwind/react'
import React from 'react'

function RatePost( { onsubmite, rateText, onChangeRateText } ) {
    return (
        <div>
            <form className="my-4">
                <Textarea label="Message" value={ rateText } onChange={ onChangeRateText } />
                <Button className="my-2 " onClick={ onsubmite }>Add comment</Button>
            </form>
        </div>
    )
}

export default RatePost