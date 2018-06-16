import React, {Component, Fragment} from 'react'
import config from "../../config";
import {Card, CardBody, CardImg, CardTitle} from "reactstrap";
import {Button, Modal} from "react-bootstrap";

class OneCardItem extends Component{
    state = {
        show: false
    };


handleClose=()=> {
    this.setState({ show: false });
}

handleShow=()=> {
    this.setState({ show: true });
}

    render(){
        return (
            <Fragment >

                <Modal show={this.state.show} onHide={this.handleClose}>

                    <Modal.Body>
                        <CardImg top width="100%" src={config.apiUrl + 'uploads/' + this.props.item.image}
                                 style={{ marginRight: '10px'}}/>
                    </Modal.Body>

                </Modal>
                <div style={{margin:"25px",display:"inline-block",padding:"20px"}}>
            <Card  key={this.props.item._id} sm="6">







                <CardImg onClick={this.handleShow} top width="100%" src={config.apiUrl + 'uploads/' + this.props.item.image}
                         style={{width: '150px', marginRight: '10px'}}/>
                <CardBody>
                    <CardTitle style={{color:"grey"}}> {this.props.item.title}</CardTitle>
                    <CardTitle  onClick={() => this.props.click(this.props.item.user._id)}
                               style={{cursor: "pointer",fontSize:"25px",fontWeight:'bold'}}> {this.props.item.user.displayName}</CardTitle>
                    {this.props.deleteButton ? <Button bsStyle="danger" onClick={() => this.props.delete(this.props.item._id)}>Delete</Button> : null}
                </CardBody>
            </Card>
                </div>
            </Fragment>
        )
    }
}
export default OneCardItem;