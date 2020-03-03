<template>
    <div class="container mx-auto py-24">
        <div class="grid grid-cols-4 gap-6">
            <md-card v-for="(item, index) in 6" :key="index" class="md-primary" md-theme="black-card">
                <md-card-header>
                    <md-card-header-text>
                        <div class="md-title">Laravel速查表</div>
                        <div class="md-subhead">Subtitle here</div>
                    </md-card-header-text>

                    <md-card-media>
                        <img src="https://images.pexels.com/photos/2906664/pexels-photo-2906664.png" alt="Avatar">
                    </md-card-media>
                </md-card-header>
            </md-card>
        </div>
        <div class="my-8">
            <md-divider></md-divider>
        </div>
        <div class="grid grid-cols-3 gap-6">
            <div v-for="(item, index) in 20" :key="index">
                <md-toolbar :md-elevation="1">
                    <span class="md-title">Primary</span>
                </md-toolbar>
                <md-list>
                    <md-list-item>
                        <md-avatar>
                            <img src="https://placeimg.com/40/40/people/5" alt="People">
                        </md-avatar>

                        <span class="md-list-item-text">Abbey Christansen</span>

                        <md-button class="md-icon-button md-list-action">
                            <md-icon class="md-primary">chat_bubble</md-icon>
                        </md-button>
                    </md-list-item>

                    <md-list-item>
                        <md-avatar>
                            <img src="https://placeimg.com/40/40/people/1" alt="People">
                        </md-avatar>

                        <span class="md-list-item-text">Alex Nelson</span>

                        <md-button class="md-icon-button md-list-action">
                            <md-icon class="md-primary">chat_bubble</md-icon>
                        </md-button>
                    </md-list-item>

                    <md-list-item>
                        <md-avatar>
                            <img src="https://placeimg.com/40/40/people/6" alt="People">
                        </md-avatar>

                        <span class="md-list-item-text">Mary Johnson</span>

                        <md-button class="md-icon-button md-list-action">
                            <md-icon>chat_bubble</md-icon>
                        </md-button>
                    </md-list-item>
                </md-list>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "doc",
        data: () => ({
            page: 0,
        }),
        mounted() {
            this.loadData();
        },
        methods: {
            ...mapActions(["articleList"]),
            loadData() {
                let params = {
                    sort: '-created_at',
                    filter: {type: 0,},
                    page: this.page,
                }
                document.documentElement.scrollTop = 0
                this.articleList({
                    params: params
                })
            },
        },
        computed: {
            ...mapGetters(['articleListData']),
        }
    }
</script>

<style scoped>

</style>