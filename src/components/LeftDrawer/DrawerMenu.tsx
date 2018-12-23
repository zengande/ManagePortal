import { Icon } from "antd";
import * as React from 'react';
import DrawerMenuItem from './DrawerMenuItem';
import { IMenu } from '../../@types/IMenu';
import styles from './LeftDrawer.less';

export default class DrawerMenu extends React.PureComponent<{ menus: IMenu[] }> {
    public render() {
        const { menus } = this.props;
        return (
            <div>
                <h2>主菜单</h2>
                <div className={styles.drawer_menus}>
                    {
                        menus.map((value: IMenu, index: number) => {
                            return (<DrawerMenuItem key={index} menu={value} />);
                        })
                    }
                    <div className={styles.back_home}>
                        <a href='/'>
                            <Icon type="arrow-left" className={styles.back_home_icon}/>
                            <span>返回主页</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}