<template>
    <div>
        <md-dialog-prompt
                :md-active.sync="showDialog"
                v-model="value"
                md-title="MD文件名称"
                md-input-maxlength="150"
                md-cancel-text="关闭"
                md-confirm-text="保存" />
        <div class="absolute top-0 right-0" style="z-index: 2">
            <md-button class="md-raised md-accent" @click="showDialog = true">保存</md-button>
        </div>
        <mavon-editor
                id="editor"
                class="h-screen mdEditor"
                v-model="value"
                @change="handleChange"/>
    </div>
</template>

<script>
    import {mavonEditor} from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'

    export default {
        name: "mdEditor",
        components: {mavonEditor},
        data: () => ({
            showDialog:false,
            value:''
        }),
        mounted() {
        },
        methods: {
            handleChange(val) {
                this.$emit('input', val)
            },
        },
    }
</script>

<style scoped>

</style>
