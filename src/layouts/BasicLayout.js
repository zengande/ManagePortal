import styles from './index.css';
import React from 'react';
import { Layout } from 'antd';
import SiderMenu from '../components/SiderMenu'

const { Content } = Layout;

function mapRoutesToMenu(routes, parentAuthority, parentName) {
    return routes
      .map(item => {
        if (!item.name || !item.path) {
          return null;
        }
  
        let locale = 'menu';
        if (parentName) {
          locale = `${parentName}.${item.name}`;
        } else {
          locale = `menu.${item.name}`;
        }
  
        const result = {
          ...item,
          name:  item.name,
          locale,
          authority: item.authority || parentAuthority,
        };
        if (item.routes) {
          const children = mapRoutesToMenu(item.routes, item.authority, locale);
          // Reduce memory usage
          result.children = children;
        }
        delete result.routes;
        return result;
      })
      .filter(item => item);
  }

class BasicLayout extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    state={
        menuData:this.getMenuData()
    }

    getMenuData(){
        const {route:{routes, roles}} =this.props;
        return  mapRoutesToMenu(routes, roles);
    }

    render() {
        const {menuData}=this.state;
        return (
            <Layout
                style={{
                    minHeight: '100vh',
                }}
            >
                <SiderMenu menuData={menuData}
                    {...this.props}/>
                <Content>
                        {this.props.children}
                </Content>
            </Layout>
        );
    }
}

export default BasicLayout;
