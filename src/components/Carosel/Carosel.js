import React, { Component } from 'react';
import Carousel from 'react-bootstrap/lib/Carousel';

class Carosel extends Component {
    render(){
        return (
            <div>
                <Carousel>
                {this.props.photos.map(photo => (
                <Carousel.Item key={photo.id}>
                    <img width={900} height={500} alt="not found" src={photo.photo_url} />
                </Carousel.Item>
                ))}
        </Carousel>
        </div>
        );
    }
}

export default Carosel;