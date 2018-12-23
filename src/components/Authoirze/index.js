
import React from 'react';
import { securityService } from '../../services/security.service';
import { connect } from 'dva';
import { Redirect } from 'react-router';

class Authoirze extends React.Component {
    render() {
        const { children, isAuthenticated } = this.props;
        if (isAuthenticated) {
            return (
                <React.Fragment>
                    {children}
                </React.Fragment>
            )
        }
        return (<Redirect to="/account/login"/>)
    }
}

export default connect(
    state => ({ isAuthenticated: state.identity.isAuthenticated })
)(Authoirze)
