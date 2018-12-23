import * as React from 'react';
import { getWelcomeSpeech } from '../../utils/common';
import { connect } from 'dva';

class Hero extends React.PureComponent<any> {

    public render() {

        const { userInfo } = this.props;
        const welcome = getWelcomeSpeech();

        return (
            <div style={{ paddingTop: "30px" }}>
                <h1 className="hero-heading">{welcome.message}，{userInfo.nickname}</h1>
            </div>
        )
    }
}

export default connect(
    (state: any) => ({
        userInfo: state.identity.userInfo
    })
)(Hero)