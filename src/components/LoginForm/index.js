import React from 'react';
import {
    Form, Icon, Input, Button, Checkbox,
} from 'antd';
import styles from './index.less';
import { securityService } from '../../services/security.service';
import connect from 'dva';

const FormItem = Form.Item;

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            inProcessing: false
        }
    }

    componentWillMount() {
        // securityService.ResetAuthorizationData();
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className={styles.login_form}>
                <FormItem>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} name="username" placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} name="password" type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className={styles.login_form_forgot} href="">Forgot password</a>
                    <Button disabled={this.state.inProcessing} type="primary" htmlType="submit" className={styles.login_form_button}>
                        {this.state.inProcessing ? '登录中' : '登录'}
                    </Button>
                </FormItem>
            </Form>
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ inProcessing: true });
        this.props.form.validateFields((err, values) => {

            if (!err) {
                this.login(values);
            } else {
                this.setState({ inProcessing: false });
            }
        });
    }

    login(values) {

        setTimeout(() => {
            let result = securityService.Authorize(values.username, values.password);
            this.setState({ inProcessing: false });
            if (result) {
                const userInfo = securityService.GetUserInfo();
                const redirect = this.getRedirect();
                this.props.login(userInfo);
                this.props.history.push(redirect)
            }
        }, 3000)

        // todo : login failed!
    }

    getRedirect() {
        const returnUrl = this.getQueryString('redirect');
        if (returnUrl && returnUrl !== '') {
            return returnUrl;
        }
        return '/'
    }


    getQueryString(name) {
        const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        let r = this.props.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return undefined;
    }
}

export default Form.create()(LoginForm)