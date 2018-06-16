import React, {Component} from 'react'
import config from "../../config";
import {Card, CardBody, CardImg, CardTitle} from "reactstrap";
import {Button} from "react-bootstrap";

class OneCardItem extends Component{
    render(){
        return (
            <Card key={this.props.item._id} sm="6">
                <CardImg top width="100%" src={config.apiUrl + 'uploads/' + this.props.item.image}
                         style={{width: '150px', marginRight: '10px'}}/>
                <CardBody>
                    <CardTitle> {this.props.item.title}</CardTitle>
                    <CardTitle onClick={() => this.props.click(this.props.item.user._id)}
                               style={{cursor: "pointer"}}> {this.props.item.user.displayName}</CardTitle>
                    {this.props.deleteButton ? <Button bsStyle="danger" onClick={() => this.props.delete(this.props.item._id)}>Delete</Button> : null}
                </CardBody>
            </Card>
        )
    }
}
export default OneCardItem;