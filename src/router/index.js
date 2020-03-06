import Vue from 'vue'
import VueRouter from 'vue-router'

const Index = () => import('../views/index.vue')
const Home = () => import('../views/home.vue')
const Article = () => import('../views/article/index.vue')
const Doc = () => import('../views/doc.vue')
const Collector = () => import('../views/collector.vue')
const Tool = () => import('../views/tool.vue')
const About = () => import('../views/about.vue')
const Writer = () => import('../views/writer/index.vue')
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Index,
        children: [
            {
                path: '/',
                name: 'home',
                component: Home,
                meta: {keepAlive: true}
            },
            {
                path: '/article/:category?',
                name: 'article',
                component: Article,
                meta: {keepAlive: true}
            },
            {
                path: '/collector',
                name: 'collector',
                component: Collector,
                meta: {keepAlive: true}
            }, {
                path: '/doc',
                name: 'doc',
                component: Doc,
                meta: {keepAlive: true}
            }, {
                path: '/tool',
                name: 'tool',
                component: Tool,
                meta: {keepAlive: true}
            },
            {
                path: '/about',
                name: 'about',
                component: About,
                meta: {keepAlive: true}
            },
        ]
    },
    {
        path: '/writer',
        name: 'writer',
        component: Writer,
        meta: {keepAlive: true}
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior: to => {
        if (to.hash) {
            return {selector: to.hash};
        } else {
            return {x: 0, y: 0};
        }
    }
})

export default router
