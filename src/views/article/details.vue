<template>
    <div class="container mx-auto py-20">
        <md-content class="p-3 md-elevation-7 mb-3">
{{article}}
        </md-content>
    </div>
</template>

<script>
    import axios from "axios";
    import localforage from 'localforage';

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
            this.loadData();
        },
        methods: {
            loadData() {
                localforage.getItem("article_" + this.$route.params.id).then((value) => {
                    axios({
                        method: "GET",
                        url: value.url
                    }).then((res) => {
                        value.details = res.data
                        this.article = value
                    })
                })
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>