<template>
    <div>
        <md-toolbar class="w-full" style="position: fixed;z-index: 8"
                    :md-elevation="scrollTopData < 20 && $route.name === 'home' ? 0 : 4"
                    :class="scrollTopData < 20 && $route.name === 'home' ? 'md-transparent':'bg-white'">
            <div class="ml-2 flex items-center absolute left-0 top-0 h-full">
                <img class="w-32" src="../assets/img/logo.png">
            </div>
            <div class="container mx-auto">
                <md-button v-for="(item,index) in navData" :key="index"
                           :class="$route.name === item.name ? 'md-raised md-primary':''"
                           :to="item.to"
                           :disabled="item.disabled">
                    {{item.title}}
                </md-button>
            </div>
            <div class="absolute right-0 top-0 h-full flex items-center pr-5">
                <md-button class="md-icon-button" md-menu-trigger>
                    <i class="icon-search text-lg"/>
                    <md-tooltip md-direction="bottom">搜索</md-tooltip>
                </md-button>
                <md-button to="/writer" class="md-icon-button" md-menu-trigger>
                    <i class="icon-xiezuo text-lg"/>
                    <md-tooltip md-direction="bottom">写作台</md-tooltip>
                </md-button>
                <md-button class="md-icon-button" md-menu-trigger>
                    <i class="icon-shezhi text-lg"/>
                    <md-tooltip md-direction="bottom">设置</md-tooltip>
                </md-button>
            </div>
        </md-toolbar>
        <router-view/>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "Home",
        data: () => ({
            navData: [
                {title: '首页', to: '/', name: 'home'},
                {title: '博文', to: '/article', name: 'article'},
                {title: 'git', to: '/git', name: 'git'},
                {title: '文档', to: '/doc', name: 'doc'},
                {title: '工具', to: '/tool', name: 'tool', disabled: true},
                {title: '关于', to: '/about', name: 'about', disabled: true},
            ]
        }),
        mounted() {
        },
        computed: {
            ...mapGetters(['scrollTopData'])
        }
    };
</script>

<style lang="scss" scoped>
    .md-transparent, .md-transparent a, .md-transparent i, .md-transparent p {
        color: white;
    }
    .bg-white{
        background-color: #ffffff;
    }
    .md-toolbar, .md-toolbar-row {
        transition: .1s cubic-bezier(.4, 0, .2, 1);
    }
</style>