import * as React from 'react';
import styles from './MainMenu.less';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import { IMenu } from '../../@types/IMenu';
import { connect } from 'dva';

class MenuItem extends React.PureComponent<{ menu: IMenu }>{
    public render() {
        const { menu } = this.props;
        return (
            <Link to={menu.link} className={styles.menu_item}>
                <Icon className={styles.menu_item_icon} type={menu.icon} />
                <div>
                    <div className={styles.menu_item_text}>{menu.text}</div>
                </div>
            </Link>
        );
    }
}

class MainMenu extends React.Component<any> {
    componentWillUpdate(){
        console.log('rrr')
        return false;
    }

    render() {
        const { menus } = this.props;
        return (
            <div className={styles.menus_container}>
                <h2 className={styles.block_heading}>主菜单</h2>
                <div className={styles.menus}>
                    {
                        (menus && menus.length > 0) ?
                            menus.map((value: IMenu, index: number) => {
                                return (<MenuItem key={index} menu={value} />);
                            }) : (
                                <div className="no-result"> 没有应用 </div>
                            )
                    }
                </div>
            </div>
        )

    }
}

export default connect(
    (state: any) => ({ menus: state.menu.menus })
)(MainMenu);