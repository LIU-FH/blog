<template>
    <div>
        <md-dialog :md-active.sync="showDialog">
            <md-dialog-title class="text-center">博文</md-dialog-title>
            <md-dialog-content style="width: 600px;padding-bottom:0">
                <md-field>
                    <label>地址</label>
                    <md-input v-model="url"></md-input>
                    <i @click="showFileList" class="icon-wenjian text-lg cursor-pointer"/>
                </md-field>
                <md-field>
                    <label>标题</label>
                    <md-input v-model="fromData.title"></md-input>
                </md-field>
                <md-field>
                    <label>展示图</label>
                    <md-input v-model="fromData.pic"></md-input>
                    <i @click="showFileList" class="icon-wenjian text-lg cursor-pointer"/>
                </md-field>
                <md-chips v-model="fromData.tags" :md-limit="5" md-placeholder="标签"></md-chips>
                <md-field>
                    <label>描述</label>
                    <md-input v-model="fromData.desc"></md-input>
                </md-field>
            </md-dialog-content>
            <md-dialog-actions>
                <div class="mb-3 flex items-center justify-between w-full">
                    <md-switch v-model="fromData.status" value="1">是否发布</md-switch>
                    <div>
                        <md-button class="md-primary" @click="showDialog = false">关闭</md-button>
                        <md-button class="md-primary" @click="doSubmit">保存</md-button>
                    </div>
                </div>
            </md-dialog-actions>
        </md-dialog>
        <div @click="showDialog = true">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "editArticle",
        props: ['item'],
        data: () => ({
            showDialog: false,
            value: "",
            fromData: {
                id: 0,
                title: "",
                pic: "",
                tags: [],
                url: "",
                desc: "",
                status: 1
            },
            url: ''
        }),
        watch: {
            articleAddData: function (val) {
                this.showDialog = false
            },
            articleEditData: function (val) {
                this.showDialog = false
            },
            url: function () {
                this.fromData.url = this.url
                this.fromData.title = this.$utils.getUrlName(this.url);
            },
            item: function () {
                this.fromData = this.item
                this.url = this.item.url
            }
        },
        methods: {
            ...mapActions(["showFileList", 'articleAdd', 'articleEdit']),
            doSubmit() {
                if (this.fromData.id) {
                    this.articleEdit({
                        params: this.fromData,
                        path: {id: this.fromData.id}
                    })
                } else {
                    this.articleAdd({
                        params: this.fromData
                    })
                }
            },
        },
        computed: {
            ...mapGetters(['articleAddData', 'articleEditData']),
        }
    };
</script>

<style scoped>
</style>
