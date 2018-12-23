import * as React from 'react';
import styles from './index.css';
import RightContent from './RightContent';
import LeftContent from './LeftContent';

export default class Header extends React.Component {

    public render() {

        return (
            <nav className={styles.fixHeader}>
                <LeftContent />
                <RightContent/>
            </nav>
        )
    }
}