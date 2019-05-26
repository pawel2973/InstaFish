import React, {Component} from 'react';

import Modal from '../../Components/UI/Modal/Modal';
import errorLogo from '../../Assets/error.png';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null});
                 console.log("ZAjebiscie");
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            });
        }

        errorConfirmedHandler = () => {
            this.setState({error: null})
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        render() {
            return (
                <>

                    <Modal
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                        <img src={errorLogo} alt="Error"/>
                        <h5> Oops! Something went wrong...</h5>

                        {this.state.error ?

                                Object.keys(this.state.error.response.data).map( key => {return (<h6 key={key}>{key}: {this.state.error.response.data[key][0]}</h6>)})
                            : null}

                    </Modal>
                    <WrappedComponent {...this.props}/>
                </>
            )
        }

    }
}

export default withErrorHandler;