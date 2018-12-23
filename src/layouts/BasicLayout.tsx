import styles from './BasicLayout.less';
import * as React from 'react';
import Header from '../components/Header/Header';
import LeftDrawer from '../components/LeftDrawer/LeftDrawer';

class BasicLayout extends React.Component<any> {
    render() {
        const { children } = this.props;
        console.log(this.props);
        return (
            <React.Fragment>
                <Header />
                <div className={styles.mainContainer}>
                    {children}
                </div >
                <LeftDrawer />
            </React.Fragment>
        );
    }

    
}

export default BasicLayout;

