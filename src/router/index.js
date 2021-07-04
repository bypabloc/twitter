import { createWebHistory, createRouter } from "vue-router";
import store from '../store'

const routes = [
    {
        path: '/',
        name: '/',
        component: () => import('../views/Welcome'),
        meta: {
            authRequired: false,
        },
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/auth/Login'),
        meta: {
            authRequired: false,
        },
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/auth/Register'),
        meta: {
            authRequired: false,
        },
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/admin/Home'),
        meta: {
            authRequired: true,
        },
    },
    { 
        path: '/:pathMatch(.*)*', 
        name: 'not-found', 
        component: () => import('../components/404'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const isLogged = store.state.user.loggedIn;
    const authRequired = to.matched.some(record => record.meta.authRequired);
    if (authRequired && !isLogged){
        next({ path: 'login' })
    } else if ((!authRequired && isLogged) && (to.name === 'login' || to.name === 'register')){
        next({ path: 'home' })
    } else {
        next()
    }
});

export default router;