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
            },
            {
                path: '/article/:category?',
                name: 'article',
                component: Article,
            },
            {
                path: '/collector',
                name: 'collector',
                component: Collector,
            }, {
                path: '/doc',
                name: 'doc',
                component: Doc,
            }, {
                path: '/tool',
                name: 'tool',
                component: Tool,
            },
            {
                path: '/about',
                name: 'about',
                component: About,
            },
        ]
    },
    {
        path: '/writer',
        name: 'writer',
        component: Writer,
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
