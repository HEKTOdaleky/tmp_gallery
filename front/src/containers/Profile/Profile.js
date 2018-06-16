import React, {Component} from 'react';
import {getPhoto} from "../../store/actions/photos";
import {connect} from 'react-redux';
import PhotoList from "../../components/PhotoList/PhotoList";


class Profile extends Component {
    componentDidMount() {
        this.props.getPhoto()
    }

    render() {
        return (<PhotoList photo={this.props.photos}/>)
    }
}


const mapStateToProps = state => ({
    photos: state.photo.photos,
    user: state.users.user

});

const mapDispatchToProps = dispatch => ({
    getPhoto: () => dispatch(getPhoto())
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);