import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import PhotoList from "../../components/PhotoList/PhotoList";
import AddPhoto from "../AddPhoto/AddPhoto";
import {deletePhoto} from "../../store/actions/photos";


class Profile extends Component {
    componentDidMount() {
        !this.props.photos.length ? this.props.history.push('/') : null;
    }

    render() {
        const flag = this.props.user&& (this.props.user._id === this.props.current);
        return (<Fragment>
            <div> {
                flag ? <AddPhoto/> : null
            }</div>
            <div><PhotoList photo={this.props.photos} delete={this.props.deletePhoto} deleteButton={flag}/></div>
        </Fragment>)
    }
}


const mapStateToProps = state => ({
    photos: state.photo.photos,
    user: state.users.user,
    current: state.users.currentUser

});

const mapDispatchToProps = dispatch => ({
    deletePhoto:(item)=>dispatch(deletePhoto(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);