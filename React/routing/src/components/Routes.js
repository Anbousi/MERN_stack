import React from 'react'

const Routes = (props) => {
    const {id , lcolor , bcolor} = props;

    const styling ={
        color: lcolor,
        backgroundColor:bcolor
    }
    return (
        <div>
            {
            isNaN(+id) ?  <h1 style={styling}>the word is : {id}</h1> : <h1>The number is : {id}</h1>
            }
        </div>
    )
}

export default Routes
