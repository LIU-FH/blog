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
    .mdEditor .v-note-op{
        padding: 5px!important;
        padding-right: 100px!important;
    }
    .mdEditor.v-note-wrapper{
        z-index: 0!important;
    }


    .tabs-h-full .md-tabs-content{
        flex: 1;
    }
    .tabs-h-full .md-tabs-container, .tabs-h-full .md-tab{
        height: 100%;
    }
</style>
