const plugins = [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
        antd: true,
        dva: true,
        dynamicImport: {
            webpackChunkName: true,
            loadingComponent: './components/PageLoading',
        },
        title: 'ManagePortal',
        dll: false,
        routes: {
            exclude: [],
        },
        hardSource: false,
        routes: {
            exclude: [
                /components/,
            ],
        },
    }],
];

const routes = [
    {
        path: '/account',
        component:'../layouts/AccountLayout',
        routes: [
            {
                path: '/account/login',
                component:'./account/Login'
            }
        ]
    },
    {
        path: '/',
        component: '../layouts/BasicLayout',
        Routes: ['src/components/Authoirze'],
        routes: [

            {
                path: '/',
                component: './Home'
            },
            {
                path: '/analysis',
                component: './Analysis',
            }
        ]
    }
]

// ref: https://umijs.org/config/
export default {
    plugins,
    routes,
    theme: {
        "primary-color": "rgb(3, 118, 163)",
    },
}
