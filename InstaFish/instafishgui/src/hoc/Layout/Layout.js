import React, {Fragment, Component} from "react";
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import Footer from '../../Components/Footer/Footer';
import classes from './Layout.module.css';
import {Container} from "react-bootstrap";

class Layout extends Component {

    render() {
        return (
            <Fragment>
                <Toolbar logged_in={this.props.logged_in}
                         handle_logout={this.props.handle_logout}
                         username={this.props.username}
                         user_id={this.props.user_id}/>
                <main className={classes.Content}>
                    <Container>
                        {this.props.children}
                    </Container>
                </main>
                <Footer/>
            </Fragment>
        );
    }
}

export default Layout;