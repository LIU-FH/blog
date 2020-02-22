<template>
    <div class="container mx-auto py-20">
        <div class="grid grid-cols-5 gap-6">
            <md-card v-for="(item, index) in 6" :key="index">
                <md-card-media-cover md-solid>
                    <md-card-media md-ratio="1:1">
                        <img src="https://cdn.pixabay.com/photo/2018/08/23/22/29/girl-3626901_1280.jpg"
                             alt="Skyscraper">
                    </md-card-media>
                    <md-card-area>
                        <md-card-header>
                            <span class="md-title">Solid background</span>
                            <span class="md-subhead">1/1 image</span>
                        </md-card-header>
                    </md-card-area>
                </md-card-media-cover>
                <div>
                    <md-button class="md-icon-button">
                        <md-icon>favorite</md-icon>
                    </md-button>

                    <md-button class="md-icon-button">
                        <md-icon>share</md-icon>
                    </md-button>
                </div>
            </md-card>
        </div>
        <div class="my-8">
            <md-divider></md-divider>
        </div>
        <div class="grid grid-cols-3 gap-6">
            <div v-for="(item, index) in 20" :key="index">
                <md-toolbar :md-elevation="1">
                    <span class="md-title">Primary</span>
                </md-toolbar>
                <md-list>
                    <md-list-item>
                        <md-avatar>
                            <img src="https://placeimg.com/40/40/people/5" alt="People">
                        </md-avatar>

                        <span class="md-list-item-text">Abbey Christansen</span>

                        <md-button class="md-icon-button md-list-action">
                            <md-icon class="md-primary">chat_bubble</md-icon>
                        </md-button>
                    </md-list-item>

                    <md-list-item>
                        <md-avatar>
                            <img src="https://placeimg.com/40/40/people/1" alt="People">
                        </md-avatar>

                        <span class="md-list-item-text">Alex Nelson</span>

                        <md-button class="md-icon-button md-list-action">
                            <md-icon class="md-primary">chat_bubble</md-icon>
                        </md-button>
                    </md-list-item>

                    <md-list-item>
                        <md-avatar>
                            <img src="https://placeimg.com/40/40/people/6" alt="People">
                        </md-avatar>

                        <span class="md-list-item-text">Mary Johnson</span>

                        <md-button class="md-icon-button md-list-action">
                            <md-icon>chat_bubble</md-icon>
                        </md-button>
                    </md-list-item>
                </md-list>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "doc"
    }
</script>

<style scoped>

</style>