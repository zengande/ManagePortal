import React, { Component } from 'react';
import { Button } from 'antd';
import router from 'umi/router';
import AuthorizeService from '../../services/AuthorizeService';

class Login extends Component{

    handleSubmit(){
        var authService = new AuthorizeService();
        authService.Authorize();
    }

    render(){

        return (<Button onClick={this.handleSubmit}>登录</Button>);
    }
}

export default Login;