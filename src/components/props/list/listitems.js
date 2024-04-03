import React, { Fragment } from "react"


const ListItems = (props)=>{
    // console.log({})
    return(
        <Fragment>
            
            <li>
            <img src={props.imageURL.image} alt="apple"/>
            </li>
        </Fragment>
    )
}

export default ListItems


