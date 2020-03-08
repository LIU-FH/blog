<template>
    <div class="container mx-auto py-24">
        <div class="grid grid-cols-4 gap-6">
            <md-card v-for="(item, index) in docListData.data" :key="index" class="md-primary" md-theme="black-card">
                <md-card-header>
                    <md-card-header-text>
                        <div class="md-title title">{{item.title}}</div>
                        <div class="md-subhead desc">{{item.desc}}</div>
                    </md-card-header-text>
                    <md-card-media>
                        <img style="width: 80px;height: 80px" class="rounded-sm object-cover"
                             v-lazy="item.pic">
                    </md-card-media>
                </md-card-header>
            </md-card>
        </div>
        <div class="text-center pt-10">
            <div v-if="isLoad">加载中</div>
            <div v-else>
                <div v-if="isLast">没有更多了</div>
                <div v-else>加载更多</div>
            </div>
        </div>
<!--        <div class="my-8">-->
<!--            <md-divider></md-divider>-->
<!--        </div>-->
<!--        <div class="grid grid-cols-3 gap-6">-->
<!--            <div v-for="(item, index) in 20" :key="index">-->
<!--                <md-toolbar :md-elevation="1">-->
<!--                    <span class="md-title">Primary</span>-->
<!--                </md-toolbar>-->
<!--                <md-list>-->
<!--                    <md-list-item>-->
<!--                        <md-avatar>-->
<!--                            <img src="https://placeimg.com/40/40/people/5" alt="People">-->
<!--                        </md-avatar>-->

<!--                        <span class="md-list-item-text">Abbey Christansen</span>-->

<!--                        <md-button class="md-icon-button md-list-action">-->
<!--                            <md-icon class="md-primary">chat_bubble</md-icon>-->
<!--                        </md-button>-->
<!--                    </md-list-item>-->

<!--                    <md-list-item>-->
<!--                        <md-avatar>-->
<!--                            <img src="https://placeimg.com/40/40/people/1" alt="People">-->
<!--                        </md-avatar>-->

<!--                        <span class="md-list-item-text">Alex Nelson</span>-->

<!--                        <md-button class="md-icon-button md-list-action">-->
<!--                            <md-icon class="md-primary">chat_bubble</md-icon>-->
<!--                        </md-button>-->
<!--                    </md-list-item>-->

<!--                    <md-list-item>-->
<!--                        <md-avatar>-->
<!--                            <img src="https://placeimg.com/40/40/people/6" alt="People">-->
<!--                        </md-avatar>-->

<!--                        <span class="md-list-item-text">Mary Johnson</span>-->

<!--                        <md-button class="md-icon-button md-list-action">-->
<!--                            <md-icon>chat_bubble</md-icon>-->
<!--                        </md-button>-->
<!--                    </md-list-item>-->
<!--                </md-list>-->
<!--            </div>-->
<!--        </div>-->
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "doc",
        data: () => ({
            page: 1,
            isLoad: false,
            list: [],
            isLast: false,
        }),
        watch: {
            scrollBottomData: function () {
                if (this.scrollBottomData < 100 && !this.isLoad && !this.isLast) {
                    this.page = this.page + 1;
                    this.loadData()
                }
            },
            docListData: function (val) {
                this.isLoad = false
                this.list = this.list.concat(val.data)
                this.isLast = val.meta.current_page >= val.meta.last_page
            }
        },
        mounted() {
            document.documentElement.scrollTop = 0
            this.loadData();
        },
        methods: {
            ...mapActions(["docList"]),
            loadData() {
                this.isLoad = true
                let params = {
                    sort: '-created_at',
                    filter: {type: 2, status: 1},
                    page: this.page,
                }
                this.docList({
                    params: params
                })
            },
        },
        computed: {
            ...mapGetters(['docListData', 'scrollBottomData']),
        }
    }
</script>

<style scoped>
    .title{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        -webkit-line-clamp: 1;
    }
    .desc {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }
</style>