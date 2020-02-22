<template>
    <div>
        <div class="bg-local bg-cover bg-center bg-no-repeat w-full flex items-center justify-center"
             style="height:80vh;background-image: url(https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_1280.jpg)">
            <div class="text-white flex flex-col items-center" style="margin-top: -8vh">
                <div class="text-3xl mb-10">当才华还支撑不起理想的时候，就应该静下心来好好学习</div>
                <mu-row gutter>
                    <mu-col span="6">
                        <md-button class="md-fab md-mini">
                            <img src="https://cdn.vuetifyjs.com/images/john.jpg">
                            <md-tooltip md-direction="bottom">Bottom</md-tooltip>
                        </md-button>
                    </mu-col>
                    <mu-col span="6">
                        <md-button class="md-fab md-mini">
                            <img src="https://cdn.vuetifyjs.com/images/john.jpg">
                            <md-tooltip md-direction="bottom">Bottom</md-tooltip>
                        </md-button>
                    </mu-col>
                </mu-row>
            </div>
        </div>
        <div class="container mx-auto" style="margin-top: -18vh">
            <div class="grid grid-cols-3 gap-6">
                <md-card>
                    <md-card-area>
                        <md-card-media>
                            <img src="https://cdn.pixabay.com/photo/2018/04/03/20/26/woman-3287951_1280.jpg" alt="People">
                        </md-card-media>
                        <md-card-header>
                            <div class="md-title">Actions left aligned</div>
                            <div class="md-subhead">Subtitle here</div>
                        </md-card-header>
                        <md-card-content>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
                        </md-card-content>
                    </md-card-area>
                    <md-card-actions md-alignment="left">
                        <md-button>Action</md-button>
                        <md-button>Action</md-button>
                    </md-card-actions>
                </md-card>
                <md-card>
                    <md-card-area>
                        <md-card-media>
                            <img src="https://cdn.pixabay.com/photo/2015/01/07/15/16/girls-591552_1280.jpg" alt="People">
                        </md-card-media>
                        <md-card-header>
                            <div class="md-title">Actions left aligned</div>
                            <div class="md-subhead">Subtitle here</div>
                        </md-card-header>
                        <md-card-content>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
                        </md-card-content>
                    </md-card-area>
                    <md-card-actions md-alignment="left">
                        <md-button>Action</md-button>
                        <md-button>Action</md-button>
                    </md-card-actions>
                </md-card>
                <md-card>
                    <md-card-area>
                        <md-card-media>
                            <img src="https://cdn.pixabay.com/photo/2016/08/04/11/19/girl-1568923_1280.jpg" alt="People">
                        </md-card-media>
                        <md-card-header>
                            <div class="md-title">Actions left aligned</div>
                            <div class="md-subhead">Subtitle here</div>
                        </md-card-header>
                        <md-card-content>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
                        </md-card-content>
                    </md-card-area>
                    <md-card-actions md-alignment="left">
                        <md-button>Action</md-button>
                        <md-button>Action</md-button>
                    </md-card-actions>
                </md-card>
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