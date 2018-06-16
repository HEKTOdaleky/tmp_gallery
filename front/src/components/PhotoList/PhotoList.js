import React from 'react';
import OneCardItem from "../OneCardItem/OneCardItem";


const PhotoList = props => {
    return (
        <div>
            {props.photo.map(item => {
                console.log(item)
                return (<OneCardItem key={item._id} {...props}  item={item}/>)


            })}
        </div>
    )
};
export default PhotoList;