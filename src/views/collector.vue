<template>
    <div class="container mx-auto py-24">
        <div class="grid grid-cols-5 gap-6">
            <md-card class="md-elevation-2" v-for="(item, index) in list" :key="index">
                <md-card-area>
                    <md-card-media class="border-b">
                        <img class="object-cover rounded-t-sm" style="height:10rem"
                             v-lazy="item.pic">
                        <div class="absolute text-center w-full" style="margin-top: -20px">
                            <md-button v-if="item.content.github" :href="item.content.github" target="_blank"
                                       class="md-icon-button md-raised">
                                <i class="icon-github text-lg"/>
                                <md-tooltip md-direction="bottom">GitHub</md-tooltip>
                            </md-button>
                            <md-button v-if="item.content.website" :href="item.content.website" target="_blank"
                                       class="md-icon-button md-raised">
                                <i class="icon-guanwang-copy text-lg"/>
                                <md-tooltip md-direction="bottom">官网</md-tooltip>
                            </md-button>
                            <md-button v-if="item.content.example" :href="item.content.example" target="_blank"
                                       class="md-icon-button md-raised">
                                <i class="icon-ceshi text-lg"/>
                                <md-tooltip md-direction="bottom">使用教程</md-tooltip>
                            </md-button>
                        </div>
                    </md-card-media>
                    <md-card-header class="title h-12 leading-5 text-lg font-medium mt-2 text-center">
                        {{item.title}}
                    </md-card-header>
                    <md-card-content class="desc h-10 leading-6 mt-2 mb-4 text-sm text-gray-600"
                                     style="font-size:.85rem;">
                        {{item.desc}} {{item.desc}} {{item.desc}} {{item.desc}}
                    </md-card-content>
                </md-card-area>
            </md-card>
        </div>
        <div class="text-center pt-10">
            <div v-if="isLoad">加载中</div>
            <div v-else>
                <div v-if="isLast">没有更多了</div>
                <div v-else>加载更多</div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "collector",
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
            collectorListData: function (val) {
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
            ...mapActions(["collectorList"]),
            loadData() {
                this.isLoad = true
                let params = {
                    sort: '-created_at',
                    filter: {type: 1, status: 1},
                    page: this.page,
                }
                this.collectorList({
                    params: params
                })
            },
        },
        computed: {
            ...mapGetters(['collectorListData', 'scrollBottomData']),
        }
    }
</script>

<style scoped>
    .title {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
    }

    .desc {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }
</style>