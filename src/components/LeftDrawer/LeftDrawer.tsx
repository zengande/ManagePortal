import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Drawer, Icon } from 'antd';
import styles from './LeftDrawer.less';
import DrawerMenu from './DrawerMenu';
import { connect } from 'dva';

class LeftDrawer extends React.Component<any> {

    public static propTypes = {
        visible: PropTypes.bool,
        onCollapse: PropTypes.func
    }

    public static defaultProps = {
        visible: false
    }

    public render() {
        const { drawerVisible, menus } = this.props;

        return (
            <Drawer visible={drawerVisible}
                placement="left"
                mask={true}
                width="314px"
                closable={false}
                style={{ padding: "0px", overflowX: "hidden" }}
                onClose={() => this.toggle(false)}>
                <div className={styles.drawer_container}>
                    <div className={styles.header_left}>
                        <Icon className={styles.collapse} type={drawerVisible ? 'menu-fold' : 'menu-unfold'} onClick={() => this.toggle(!drawerVisible)} />
                    </div>
                    <div className={styles.drawer_mainview}>
                        <DrawerMenu menus={menus} />
                    </div>
                </div>
            </Drawer>
        )
    }

    toggle = (visable: boolean) => {
        this.props.dispatch(
            {
                type: 'menu/toggle',
                payload: {
                    isCollapsed: visable
                }
            }
        )
    }
}

export default connect(
    (state: any) => ({ ...state.menu })
)(LeftDrawer);