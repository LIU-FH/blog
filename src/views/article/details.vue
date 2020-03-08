<template>
    <div class="container mx-auto py-20">
        <div class="mt-5 grid grid-cols-11 gap-6">
            <div class="col-span-3">
                <md-content class="md-elevation-3 mb-5">
                    <div class="w-full">
                        <img class="w-full h-full rounded-sm object-cover h-40" v-lazy="article.pic">
                    </div>
                    <div class="p-2">
                        <div class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">
                            {{article.title}}
                        </div>
                        <p class="text-gray-600 leading-6 py-2">
                            {{article.desc}}
                        </p>
                        <div class="mt-1 flex items-center justify-between">
                            <div>
                                <md-chip v-for="chip in article.tags" :key="chip">{{ chip }}</md-chip>
                            </div>
                            <p class="text-gray-800">{{article.created_at}}</p>
                        </div>
                    </div>
                </md-content>
                <md-content class="md-elevation-3 mb-5">
                    123
                </md-content>
            </div>
            <div class="col-span-8">
                <md-content class="p-3 md-elevation-3 mb-3">
                    <div class="markdown-body" v-html="article.details"></div>
                </md-content>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import localforage from 'localforage';
    import marked from 'marked';
    import hljs from 'highlight.js';

    export default {
        name: 'articleDetails',
        data: () => ({
            article: {},
        }),
        watch: {
            $route: function () {
                this.loadData();
            }
        },
        mounted() {
            marked.setOptions({
                highlight: function (code) {
                    return hljs.highlightAuto(code).value;
                }
            });
            this.loadData();
        },
        methods: {
            loadData() {
                localforage.getItem("article_" + this.$route.params.id).then((value) => {
                    let key = "article_" + value.id + value.created_at
                    localforage.getItem(key).then((value_local) => {
                        if (value_local) {
                            this.article = value_local
                        } else {
                            axios({
                                method: "GET",
                                url: value.content.url
                            }).then((res) => {
                                value.details = marked(res.data)
                                this.article = value
                                localforage.setItem(key, value)
                            })
                        }
                    })
                })
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>