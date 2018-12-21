import * as React from 'react';
import styles from './index.css';
import RightContent from './RightContent';
import LeftContent from './LeftContent';

export default class Header extends React.Component<any, any> {

    public render() {
        const { collapsed, onCollapse } = this.props;

        return (
            <nav className={styles.fixHeader}>
                <LeftContent  collapsed={collapsed}
                    onCollapse={onCollapse} />
                <RightContent/>
            </nav>
        )
    }
}