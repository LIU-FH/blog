<template>
    <div class="container mx-auto py-20">
        <div class="grid grid-cols-2 gap-6 mt-8">
            <md-content v-for="(item, index) in list" :key="index" class="p-3 md-elevation-7 mb-3">
                <div class="md:flex">
                    <div class="md:flex-shrink-0 w-56">
                        <img class="w-full h-full w-56 rounded-sm object-cover" style="height: 9.8rem;"
                             v-lazy="item.pic">
                    </div>
                    <div class="w-full mt-4 md:mt-0 md:ml-6">
                        <div class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">
                            {{item.title}}
                        </div>
                        <p class="mt-1 text-gray-600 desc leading-6 h-12 py-1">
                            {{item.desc}}
                        </p>
                        <div class="flex items-end justify-between mt-4">
                            <div>
                                <p class="text-gray-800">{{item.created_at}}</p>
                                <div class="mt-2">
                                    <md-chip v-for="chip in item.tags" :key="chip">{{ chip }}</md-chip>
                                </div>
                            </div>
                            <md-button @click="clickItem(item)" class="md-icon-button md-raised md-primary">
                                <i class="icon-fangxiangyou"/>
                            </md-button>
                        </div>
                    </div>
                </div>
            </md-content>
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
    import localforage from 'localforage';

    export default {
        name: 'articleIndex',
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
            articleListData: function (val) {
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
            ...mapActions(["articleList"]),
            loadData() {
                this.isLoad = true
                let params = {
                    sort: '-created_at',
                    filter: {type: 0, status: 1},
                    page: this.page,
                }
                this.articleList({
                    params: params
                })
            },
            clickItem(val) {
                localforage.setItem("article_" + val.id, val).then((value) => {
                    this.$router.push('/article/' + val.id)
                })
            }
        },
        computed: {
            ...mapGetters(['articleListData', 'scrollBottomData']),
        }
    }
</script>

<style lang="scss" scoped>
    .desc {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }
</style>