const routes = [{
    path:'/account',
    routes:[
        {path:'/account/login', component:'./Account/Login'}
    ]
},{
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    authority: ['admin', 'user'],
    routes: [
        { path: '/', redirect: '/dashboard/analysis' },
        {
            path: '/dashboard',
            name: 'dashboard',
            text: 'Dashboard',
            icon: 'dashboard',
            routes: [
                {
                    path: '/dashboard/analysis',
                    name: 'analysis',
                    text: '分析页',
                    component: './Dashboard/Analysis',
                }
            ]
        }
    ]
}, {
    component: '404',
}];

export default {
    plugins: [
        ['umi-plugin-react', {
            antd: true,
            dva: false,
            dynamicImport: false,
            title: 'ManagaPortal',
            dll: false,
            hardSource: false,
        }],
    ],
    routes: routes
}
