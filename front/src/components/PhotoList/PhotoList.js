import React from 'react';
import config from "../../config";
import {Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from "reactstrap";



const PhotoList=props=>{
    return (
        <div>
            {props.photo.map(item=>{
                return(
                    <Card  key={item._id} sm="6">
                        <CardImg top width="100%" src={config.apiUrl + 'uploads/' + item.image}
                                                           style={{width: '150px', marginRight: '10px'}}/>
                        <CardBody>
                            <CardTitle> {item.title}</CardTitle>
                            <CardTitle style={{cursor:"pointer"}}> {item.user.displayName}</CardTitle>

                        </CardBody>
                    </Card>)




            })}
        </div>
    )
};
export default PhotoList;