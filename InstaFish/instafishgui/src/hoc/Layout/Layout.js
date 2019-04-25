import React, {Fragment, Component} from "react";
import Toolbar from '../../Navigation/Toolbar/Toolbar';
import CustomFooter from '../../Components/CustomFooter/CustomFooter';
import classes from './Layout.module.css';

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Toolbar/>
                <main className={classes.Layout}>{this.props.children}</main>
                <CustomFooter/>
            </Fragment>
        );
    }
}

export default Layout;