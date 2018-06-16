import React from 'react';
import config from "../../config";
import { Card, CardBody, CardImg, CardTitle} from "reactstrap";
import {Button} from "react-bootstrap";


const PhotoList = props => {
    return (
        <div>
            {props.photo.map(item => {
                return (

                    <Card key={item._id} sm="6">
                        <CardImg top width="100%" src={config.apiUrl + 'uploads/' + item.image}
                                 style={{width: '150px', marginRight: '10px'}}/>
                        <CardBody>
                            <CardTitle> {item.title}</CardTitle>
                            <CardTitle onClick={() => props.click(item.user._id)}
                                       style={{cursor: "pointer"}}> {item.user.displayName}</CardTitle>
                            {props.deleteButton ? <Button bsStyle="danger" onClick={() => props.delete(item._id)}>Delete</Button> : null}
                        </CardBody>
                    </Card>)


            })}
        </div>
    )
};
export default PhotoList;