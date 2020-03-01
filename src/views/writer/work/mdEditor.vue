<template>
    <div>
        <md-dialog-prompt
                :md-active.sync="showDialog"
                v-model="mdDraftData.title"
                md-title="What's your name?"
                md-input-maxlength="30"
                md-input-placeholder="Type your name..."
                md-confirm-text="保存"
                @md-confirm="handleConfirm"
        />
        <div class="absolute top-0 right-0" style="z-index: 2">
            <md-button class="md-raised md-accent" @click="showDialog = true">保存</md-button>
        </div>
        <mavon-editor id="editor" class="h-screen mdEditor" v-model="mdDraftData.content"/>
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

    export default {
        name: "mdEditor",
        components: {FileList, mavonEditor},
        data: () => ({
            showDialog: false,
            value: "",
        }),
        mounted() {
        },
        methods: {
            ...mapActions(["mdDraft", "fileUpload", "showFileList"]),
            handleConfirm() {
                let fileInfo = {
                    name: this.mdDraftData.title + ".md",
                    type: "md",
                    size: this.mdDraftData.content.length,
                    status: 0,
                    key: "FileUpload-" + md5(this.mdDraftData.title)
                }
                let blob = new Blob([this.mdDraftData.content], {
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
