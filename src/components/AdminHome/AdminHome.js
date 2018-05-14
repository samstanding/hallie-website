import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';
import { triggerPost } from '../../redux/actions/workActions';
import ArtworkForm from '../ArtworkForm/ArtworkForm';

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
                media_url: '',
            },
        };
    }

    handleChangeFor = propertyName => (event) => {
        this.setState({
            work: {
                ...this.state.work,
                [propertyName]: event.target.value,
            }
        });
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
                    <ArtworkForm handleChangeFor={this.handleChangeFor} work={this.state.work} handleSubmit={this.handleSubmit}/>
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