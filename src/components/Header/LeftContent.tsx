import * as React from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import styles from './index.css';

export default class LeftContent extends React.PureComponent<any> {

    constructor(props: any) {
        super(props);
        this.toggle = this.toggle.bind(this);
    }

    public render() {
        const { collapsed } = this.props;
        return (
            <div className={styles.headerLeft}>
                <Icon className={styles.collapse} type={collapsed ? 'menu-fold' : 'menu-unfold'} onClick={this.toggle} />
                <Link className={styles.logoText} to="/">TOGETHER</Link>
            </div>
        );
    }

    private triggerResizeEvent() {
        const event = document.createEvent('HTMLEvents');
        event.initEvent('resize', true, false);
        window.dispatchEvent(event);
    }

    private toggle() {
        const { collapsed, onCollapse } = this.props;
        onCollapse(!collapsed);
        this.triggerResizeEvent();
    }
}