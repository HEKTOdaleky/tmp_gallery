import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Col, ControlLabel, FormControl, FormGroup} from "react-bootstrap";
import {sendPhoto} from "../../store/actions/photos";


class AddPhoto extends Component {


    state = {
        title: '',
        image: '',
    };

    sendData = (event) => {
        event.preventDefault();


        const formData = new FormData();
        Object.keys(this.state).forEach(key => {
            formData.append(key, this.state[key]);
        });

        this.props.sendPhoto(formData)
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    fileChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.files[0]
        });
    };

    render() {
        return (
            <div style={{border:"1px solid black", overflow:"hidden", padding:"35px", marginBottom:"20px"}}>
                <FormGroup controlId="about">
                    <Col componentClass={ControlLabel} sm={2}>
                        Title
                    </Col>
                    <Col sm={10}>
                        <FormControl
                            type="text" required
                            placeholder="Enter product title"
                            name="title"
                            value={this.state.title}
                            onChange={this.inputChangeHandler}
                        />
                    </Col>
                </FormGroup>

                <Col sm={10}>
                    <FormControl
                        type="file"
                        name="image"
                        onChange={this.fileChangeHandler}
                    />
                </Col>
                {this.state.title&&this.state.image?<Button onClick={this.sendData}>Send</Button>:null }
            </div>
        )
    }

};
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    sendPhoto:(data)=>dispatch(sendPhoto(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPhoto);