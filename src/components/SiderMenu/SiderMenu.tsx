import React, { PureComponent } from 'react';
import { Menu, Icon, Layout } from 'antd';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;
const { Sider } = Layout;

const getIcon = icon => {
    if (typeof icon === 'string' && icon.indexOf('http') === 0) {
        return <img src={icon} alt="icon" className={styles.icon} />;
    }
    if (typeof icon === 'string') {
        return <Icon type={icon} />;
    }
    return icon;
};

export default class SiderMenu extends PureComponent {
    constructor(props) {
        super(props);
        // this.state={
        //     openKeys:getDefaultCollapsedSubMenus(props)
        // }
    }

    /**
   * 获得菜单子节点
   * @memberof SiderMenu
   */
    getNavMenuItems = (menusData, parent=null) => {
        if (!menusData) {
            return [];
        }
        return menusData
            .filter(item => item.name && !item.hideInMenu)
            .map(item => {
                // make dom
                const ItemDom = this.getSubMenuOrItem(item);
                // return this.checkPermissionItem(item.authority, ItemDom);
                return ItemDom;
            })
            .filter(item => item);
    };

    /**
     * get SubMenu or Item
     */
    getSubMenuOrItem = item => {
        // doc: add hideChildrenInMenu
        if (item.children && !item.hideChildrenInMenu && item.children.some(child => child.name)) {
            const { name } = item;
            return (
                <SubMenu
                    title={
                        item.icon ? (
                            <span>
                                {getIcon(item.icon)}
                                <span>{name}</span>
                            </span>
                        ) : (
                                name
                            )
                    }
                    key={item.path}
                >
                    {this.getNavMenuItems(item.children)}
                </SubMenu>
            );
        }
        return <Menu.Item key={item.path}>{this.getMenuItemPath(item)}</Menu.Item>;
    };

    /**
  * 判断是否是http链接.返回 Link 或 a
  * Judge whether it is http link.return a or Link
  * @memberof SiderMenu
  */
    getMenuItemPath = item => {
        const { name } = item;
        const itemPath = this.conversionPath(item.path);
        const icon = getIcon(item.icon);
        const { target } = item;
        // Is it a http link
        if (/^https?:\/\//.test(itemPath)) {
            return (
                <a href={itemPath} target={target}>
                    {icon}
                    <span>{name}</span>
                </a>
            );
        }
        const { location } = this.props;
        return (
            <Link
                to={itemPath}
                target={target}
                replace={itemPath === location.pathname}>
                {icon}
                <span>{name}</span>
            </Link>
        );
    };

    conversionPath = path => {
        if (path && path.indexOf('http') === 0) {
            return path;
        }
        return `/${path || ''}`.replace(/\/+/g, '/');
    };


    render() {
        const { menuData } = this.props;
        const navTheme='dark';
        return (
            <Sider
                trigger={null}
                collapsible
                breakpoint="lg"
                theme={navTheme}
                width={256}>
                <div id="logo">
                    <Link to="/">
                        <h1>Ant Design Pro</h1>
                    </Link>
                </div>
                <Menu key="menu"
                    mode="inline"
                    theme={navTheme}>
                    {this.getNavMenuItems(menuData)}
                </Menu>
            </Sider>
        );
    }
}
