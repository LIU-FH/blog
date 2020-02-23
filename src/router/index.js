import Vue from 'vue'
import VueRouter from 'vue-router'

const Index = () => import('../views/index.vue')
const Home = () => import('../views/home.vue')
const Article = () => import('../views/article/index.vue')
const Doc = () => import('../views/doc.vue')
const Git = () => import('../views/git.vue')
const Tool = () => import('../views/tool.vue')
const About = () => import('../views/about.vue')
const Writer = () => import('../views/writer/index.vue')
const WriterHome = () => import('../views/writer/home.vue')
const WriterArticle = () => import('../views/writer/article.vue')
const WriterGit = () => import('../views/writer/git.vue')
const WriterDoc = () => import('../views/writer/doc.vue')
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
                path: '/git',
                name: 'git',
                component: Git,
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
                path: '/writer/git',
                name: 'WriterGit',
                component: WriterGit,
            }, {
                path: '/writer/doc',
                name: 'WriterDoc',
                component: WriterDoc,
            }
        ]
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
