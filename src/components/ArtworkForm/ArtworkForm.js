import React, { Component } from 'react';
import ReactFilestack from 'react-filestack';



class ArtworkForm extends Component{
    render() {
        return (
            <div>
            <h3>Upload a piece of work!</h3>
            <form onSubmit={this.props.handleSubmit}>
                <input  
                    type="text"
                    placeholder="title"
                    value={this.props.work.title}
                    onChange={this.props.handleChangeFor('title')}
                />
                <input  
                    type="text"
                    placeholder="type"
                    value={this.props.work.type}
                    onChange={this.props.handleChangeFor('type')}
                />
               
                <ReactFilestack 
                apikey={process.env.REACT_APP_FILESTACK_KEY} 
                mode={'pick'}
                onSuccess={(response) => {
                    this.props.handleChangeFor('media_url');
                    this.props.work.media_url=response.filesUploaded[0];
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
    

export default ArtworkForm;

