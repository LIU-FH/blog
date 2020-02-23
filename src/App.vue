<template>
    <div id="app">
        <router-view/>
    </div>
</template>
<script>
    let scrollEven = false
    import {mapActions} from 'vuex'

    export default {
        name: "App",
        mounted: function () {
            window.addEventListener('scroll', this.handleScroll, true)
        },
        methods: {
            ...mapActions(['scrollTop']),
            handleScroll() {
                if (!scrollEven) {
                    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                    this.scrollTop(scrollTop);
                    setTimeout(() => {
                        scrollEven = false
                    }, 300)
                }
            },
        },
        destroyed: function () {
            window.removeEventListener('scroll', this.handleScroll)
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .max-height-none .md-content{
        max-height: none!important;
    }
</style>
