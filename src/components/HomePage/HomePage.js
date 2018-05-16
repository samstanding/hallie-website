import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCaroPhotos } from '../../redux/actions/workActions';
import NavBar from '../NavBar/NavBar';
import Carosel from '../Carosel/Carosel';

const mapStateToProps = state => ({
    photos: state.getCaroPhotos,
})



class HomePage extends Component {
    constructor(props) {
        super(props);

    }
    
    componentDidMount() {
        this.props.dispatch(fetchCaroPhotos());
    }
 
    render() {
        let content = null;

        if (this.props.photos) {
            content = (
                <div>
                    <Carosel photos={this.props.photos}/>
                    <p>{JSON.stringify(this.props.photos)}</p>
                </div>
            )
        }
        return (
            <div>
        <NavBar/>
        { content }
        </div>
        );
    }
}

export default connect (mapStateToProps) (HomePage);