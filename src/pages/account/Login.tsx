import * as React from 'react';
import LoginForm from '../../components/LoginForm';
import { connect } from 'dva';
import { IUserInfo } from 'src/@types/IUserInfo';
import styles from './Login.less';

class Login extends React.Component<any> {
    public render() {
        return (
            <div className={styles.login_container}>
                <h1 style={{ textAlign: 'center' }}>LOGIN</h1>
                <LoginForm login={this.login} {...this.props} />
            </div>
        );
    }

    login = (userInfo: IUserInfo) => {
        this.props.dispatch({
            type: 'identity/login',
            payload: {
                userInfo
            }
        })
    }
}

export default connect(
)(Login)