<template>
    <div>
        <md-toolbar class="w-full" style="position: fixed;z-index: 100"
                    :md-elevation="scrollTopData < 20 && $route.name === 'home' ? 0 : 4"
                    :class="scrollTopData < 20 && $route.name === 'home' ? 'md-transparent':''">
            <div class="ml-3 flex items-center absolute left-0 top-0 h-full">
                <md-button class="md-fab md-mini">
                    <img src="https://cdn.vuetifyjs.com/images/john.jpg">
                </md-button>
                <p class="ml-2">LIUFH</p>
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
                <md-menu md-size="big" md-align-trigger>
                    <md-button class="md-icon-button" md-menu-trigger>
                        <md-icon>contacts</md-icon>
                    </md-button>
                    <md-menu-content>
                        <div class="author-card">
                            <md-avatar class="md-large">
                                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="Marcos Moura">
                            </md-avatar>
                            <div class="author-card-info">
                                <span>Marcos Moura</span>
                                <div class="author-card-links">
                                    <a href="https://linkedin.com/in/marcosvmmoura" target="_blank" rel="noopener">Linkedin</a>
                                    <a href="https://github.com/marcosmoura" target="_blank" rel="noopener">GitHub</a>
                                </div>
                            </div>
                        </div>
                    </md-menu-content>
                </md-menu>
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

    .md-toolbar, .md-toolbar-row {
        transition: .1s cubic-bezier(.4, 0, .2, 1);
    }
</style>