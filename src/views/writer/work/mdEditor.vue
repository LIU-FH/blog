<template>
    <div>
        <md-dialog-prompt
                style="width: 500px"
                :md-active.sync="showDialog"
                v-model="fromData.title"
                md-title="想个合适的标题？"
                md-input-maxlength="100"
                md-input-placeholder="请输入标题"
                md-confirm-text="保存"
                md-cancel-text="关闭"
                @md-confirm="handleConfirm"
        />
        <div class="absolute top-0 right-0" style="z-index: 2">
            <md-button class="md-raised md-accent" @click="showDialog = true">保存</md-button>
        </div>
        <mavon-editor id="editor" class="h-screen mdEditor" v-model="fromData.content"/>
        <md-speed-dial class="md-bottom-right">
            <md-speed-dial-target  @click="showFileList">
                <i class="icon-wenjian text-white"></i>
            </md-speed-dial-target>
        </md-speed-dial>
        <file-list/>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import {mavonEditor} from "mavon-editor";
    import "mavon-editor/dist/css/index.css";
    import md5 from 'crypto-js/md5';
    import localforage from 'localforage';
    import FileList from "./fileList";
    import axios from "axios";
    export default {
        name: "mdEditor",
        components: {FileList, mavonEditor},
        data: () => ({
            showDialog: false,
            fromData: {
                title:'',
                content:''
            },
        }),
        watch:{
            $route:function () {
                this.loadData()
            },
            mdDraftData:function () {
                if (this.mdDraftData && (this.mdDraftData.title || this.mdDraftData.content)){
                    this.fromData = {
                        title : this.mdDraftData.title,
                        content : this.mdDraftData.content
                    }
                }
            }
        },
        mounted() {
            this.loadData()
        },
        methods: {
            ...mapActions(["mdDraft", "fileUpload", "showFileList","fileDel"]),
            loadData(){
                if (this.$route.query.path){
                    axios({
                        method: "GET",
                        url:this.$utils.getGitHunUrl(this.$route.query.path)
                    }).then((res) => {
                        this.fromData = {
                            title:this.$utils.getUrlName(this.$route.query.path),
                            content:res.data,
                        }
                    })
                }
            },
            handleConfirm() {
                let fileInfo = {
                    name: this.fromData.title + ".md",
                    type: "md",
                    size: this.fromData.content.length,
                    status: 0,
                    key: "FileUpload-" + md5(this.fromData.title)
                }
                let blob = new Blob([this.fromData.content], {
                    type: "text/plain"
                });
                localforage.setItem(fileInfo.key, blob).then(() => {
                    this.fileUpload(fileInfo)
                })
            },
        },
        computed: {
            ...mapGetters(["mdDraftData"]),
        }
    };
</script>

<style scoped>
</style>
