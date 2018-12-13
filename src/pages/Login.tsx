import * as React from 'react';
import { securityService } from '../services/security.service'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../store/userStore'
import { Link } from 'react-router-dom';

class Login extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.login = this.login.bind(this);
    }

    /**
     * render
     */
    public render() {
        const { identity } = this.props;
        return (
            <div>
                <h1>{JSON.stringify(identity)}</h1>
                {
                    identity.isAuthenticated ? (
                        <Link to={"/"}>已登录</Link>
                    ) : (
                            <button onClick={this.login}>登录</button>
                        )
                }

            </div>
        )
    }

    private login(): void {
        const { login, } = this.props
        const userInfo = securityService.Authorize();
        login(userInfo);
    }
}

const mapDispatchToProps = (dispatch: any) => bindActionCreators(actionCreators, dispatch)

export default connect(
    (state: any) => ({ identity: state.identity }),
    mapDispatchToProps
)(Login)