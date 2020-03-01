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
const WriterHome = () => import('../views/writer/home.vue')
const WriterArticle = () => import('../views/writer/article.vue')
const WriterCollector = () => import('../views/writer/collector.vue')
const WriterDoc = () => import('../views/writer/doc.vue')
const WriterMdEditor = () => import('../views/writer/work/mdEditor.vue')
const WriterCheatSheet = () => import('../views/writer/work/cheatSheet.vue')
const WriterSpider = () => import('../views/writer/work/spider.vue')
const WriterTurndown = () => import('../views/writer/work/turndown.vue')
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
        children: [
            {
                path: '/writer',
                name: 'WriterHome',
                component: WriterHome,
            }, {
                path: '/writer/article',
                name: 'WriterArticle',
                component: WriterArticle,
            },
            {
                path: '/writer/collector',
                name: 'WriterCollector',
                component: WriterCollector,
            }, {
                path: '/writer/doc',
                name: 'WriterDoc',
                component: WriterDoc,
            },
        ]
    },{
        path: '/writer/mdeditor',
        name: 'WriterMdEditor',
        component: WriterMdEditor,
    },
    {
        path: '/writer/spider',
        name: 'WriterSpider',
        component: WriterSpider,
    },{
        path: '/writer/cheatsheet',
        name: 'WriterCheatSheet',
        component: WriterCheatSheet,
    },{
        path: '/writer/turndown',
        name: 'WriterTurndown',
        component: WriterTurndown,
    }
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
