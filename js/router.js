const routes = [
    {
        path: '/',
        name: 'home',
        component: asHome,
    },
    {
        path: '/aurorians',
        name: 'aurorians',
        component: asAurorians,
    },
    {
        path: '/items',
        name: 'items',
        component: asItems,
    }
]

const router = new VueRouter({
    routes
})