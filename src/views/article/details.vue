<template>
    <div class="container mx-auto py-20">
        <div class="grid grid-cols-10 gap-6">
            <div class="col-span-3">
                <md-content class="p-3 md-elevation-3 mb-3">

                </md-content>
            </div>
            <div class="col-span-7">
                <md-content class="p-3 md-elevation-3 mb-3">
                    <div class="text-lg my-5">{{article.title}}</div>
                    <div v-html="article.details"></div>
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
                    localforage.getItem("article_" + value.id + value.created_at).then((value_local) => {
                        if (value_local){
                            this.article = value_local
                        }else{
                            axios({
                                method: "GET",
                                url: value.content.url
                            }).then((res) => {
                                value.details = marked(res.data)
                                this.article = value
                                localforage.setItem(value)
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