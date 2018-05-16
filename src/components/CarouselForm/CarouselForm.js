import React, { Component } from 'react';
import ReactFilestack from 'react-filestack';


class CarouselForm extends Component{
    render() {
        return (
            <div>
            <h3>Upload a photo for the carousel!</h3>
            <form onSubmit={this.props.handleCaroSubmit}>
                <input  
                    type="number"
                    placeholder="order"
                    value={this.props.carouselPhoto.order}
                    onChange={this.props.handleCaroChange('order')}
                />
                <ReactFilestack 
                apikey={process.env.REACT_APP_FILESTACK_KEY} 
                mode={'pick'}
                onSuccess={(response) => {
                    this.props.handleCaroChange('photo_url');
                    this.props.carouselPhoto.photo_url=response.filesUploaded[0];
                    console.log(response);
                } }
                onError={(e) => console.log(e)}
                buttonText={''}
                buttonClass="fs-button"
                 />
                <input 
                     type="submit"
                     name="submit"
                     value="Submit"
                />
            </form>
            </div>
        );
    }
}
    

export default CarouselForm;