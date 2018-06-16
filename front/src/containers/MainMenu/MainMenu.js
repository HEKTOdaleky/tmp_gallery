import React, {Component} from 'react';
import {getPhoto, getPhotoById} from "../../store/actions/photos";
import {connect} from 'react-redux';
import PhotoList from "../../components/PhotoList/PhotoList";


class MainMenu extends Component {
    componentDidMount() {
        this.props.getPhoto()
    }

    render() {
        return (<PhotoList photo={this.props.photos} click={this.props.getPhotoById}/>)
    }
}


const mapStateToProps = state => ({
    photos: state.photo.photos
});

const mapDispatchToProps = dispatch => ({
    getPhoto: () => dispatch(getPhoto()),
    getPhotoById: (id) => dispatch(getPhotoById(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);