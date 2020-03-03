<template>
    <div>
        <div class="bg-local bg-cover bg-center bg-no-repeat w-full flex items-center justify-center"
             style="height:100vh;background-image: url(https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_1280.jpg)">
            <div class="text-white flex flex-col items-center" style="margin-top: -8vh">
                <div class="text-3xl mb-10">当才华还支撑不起理想的时候，就应该静下心来好好学习</div>
                <mu-row gutter>
                    <mu-col span="6">
                        <md-button class="md-icon-button md-raised">
                            <i class="icon-qq text-lg"/>
                            <md-tooltip md-direction="bottom">QQ</md-tooltip>
                        </md-button>
                    </mu-col>
                    <mu-col span="6">
                        <md-button class="md-icon-button md-raised">
                            <i class="icon-weixin text-lg"/>
                            <md-tooltip md-direction="bottom">微信</md-tooltip>
                        </md-button>
                    </mu-col>
                    <mu-col span="6">
                        <md-button href="https://github.com/LIU-FH" target="_blank" class="md-icon-button md-raised">
                            <i class="icon-github text-lg"/>
                            <md-tooltip md-direction="bottom">微信</md-tooltip>
                        </md-button>
                    </mu-col><mu-col span="6">
                        <md-button class="md-icon-button md-raised">
                            <i class="icon-youxiang text-lg"/>
                            <md-tooltip md-direction="bottom">微信</md-tooltip>
                        </md-button>
                    </mu-col>
                </mu-row>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "home",
        data: () => ({})
    };
</script>

<style lang="scss" scoped>
</style>