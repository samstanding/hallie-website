import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';
import { triggerPost, triggerCaroPost } from '../../redux/actions/workActions';
import ArtworkForm from '../ArtworkForm/ArtworkForm';
import CarouselForm from '../CarouselForm/CarouselForm';

const mapStateToProps = state => ({
    user: state.user,
})

class AdminHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            work: {
                title: '',
                type: '',
                media_url: {},
            },
            carouselPhoto: {
                photo_url: {},
                order: 0,
            }
        };
    }

    handleEventChange = (event) => {
        this.setState({
            work: {
                title: event.target.value,
            }
        });
    }

    handleTypeChange = event => {
        this.setState({
            work: {
                type: event.target.value,
            },
        })
    }

    handleCaroChange = propertyName => (event) => {
        this.setState({
            carouselPhoto: {
                [propertyName]: event.target.value,
            }
        })
    }

    handleCaroSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch(triggerCaroPost(this.state.carouselPhoto));
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch(triggerPost(this.state.work));
    }
    
    
    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER});
    }

    componentDidUpdate() {
        if(!this.props.user.isLoading && this.props.user.userName === null) {
            this.props.history.push('/admin');
        }
    }

    logout = () => {
        this.props.dispatch(triggerLogout());
    }


    render() {
        let content = null;

        if (this.props.user.userName) {
            content = (
                <div>
                    <h1 
                        id="welcome"
                    >
                        Welcome, {this.props.user.userName}!
                    </h1>
                    <hr/>
                    {/* <Carosel/> */}
                    <CarouselForm handleCaroChange={this.handleCaroChange} handleCaroSubmit= {this.handleCaroSubmit} carouselPhoto={this.state.carouselPhoto}/>
                    <ArtworkForm handleTitleChange={this.handleTitleChange} handleTypeChange={this.handleTypeChange} work={this.state.work} handleSubmit={this.handleSubmit}/>
                    <button onClick={this.logout}> Log Out </button>
                    </div>
            )
        }
        return (
            <div>
                { content }
            </div>
        ); 
    }
}

export default connect (mapStateToProps) (AdminHome);