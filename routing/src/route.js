/* import User from './components/user/User.vue';
import UserStart from './components/user/UserStart.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue'; */
import Home from './components/Home.vue';
import Header from './components/Header.vue';

//lazy loading
const User = resolve => {
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue'));
    }, 'user');
}

const UserStart = resolve => {
    require.ensure(['./components/user/UserStart.vue'], () => {
        resolve(require('./components/user/UserStart.vue'));
    }, 'user');
}

const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], () => {
        resolve(require('./components/user/UserDetail.vue'));
    }, 'user');
}

const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue'));
    }, 'user');
}

export const routes = [
    {
        path: '',
        name: "home",
        components: {
            default: Home,
            'header-top': Header
        }
    },
    /* {
        path: '/user/:id',
        component: User,
        props: true //see example here: https://github.com/vuejs/vue-router/blob/dev/examples/route-props/app.js
    } */
    {
        path: '/user',
        components: {
            default: User,
            'header-bottom': Header
        },
        children: [
            {
                path: '',
                name: 'user',
                component: UserStart
            },
            {
                path: ':id',
                component: UserDetail,
                beforeEnter: (from, to, next) => {
                    console.log('inside route setup');
                    next();
                }
            },
            {
                path: ':id/edit',
                component: UserEdit,
                name: 'userEdit'
            }
        ]
    },
    {
        path: '/redirect-me',
        redirect: {name: 'user'}
    },
    {
        path: '*',
        redirect: {name: 'home'}
    }
];