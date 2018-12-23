import * as React from 'react';
import { Icon } from 'antd';
import styles from './LeftDrawer.less';
import { IMenu } from '../../@types/IMenu';

export default class DrawerMenuItem extends React.PureComponent<{ menu: IMenu }> {
    public render() {
        const { menu } = this.props;
        return (
            <div className={styles.drawer_menu_item}>
                <a href={menu.link}>
                    <Icon type={menu.icon} className={styles.drawer_menu_icon} />
                    <span>{menu.text}</span>
                </a>
                <div className={styles.right_blank}>
                    <a title="新页面打开" target="_blank" href={menu.link}>
                        <Icon className={styles.drawer_menu_icon} type="ellipsis" />
                    </a>
                </div>
            </div >
        )
    }
}