import * as React from 'react';
import Hero from '../components/Hero/Hero';
import MainMenu from '../components/MainMenu/MainMenu';
import styles from './Home.less';

export default class Home extends React.PureComponent {
    render() {
        return (
            <div className={styles.main_content}>
                <Hero />

                <MainMenu />
            </div>
        )
    }
}