<template>
    <div>
        <h1 class="">КООООООООТЛЫ</h1>
        <div class="catalog__container">
            <v-catalog-kotli></v-catalog-kotli>
        </div>
    </div>
</template>

<script>
import vCatalogKotli from '../components/v-catalog-kotli.vue'

    export default {
        components: {
            vCatalogKotli,
        },
        props: {},
        data() {
            return {
                title: 'main wrapper'
            }
        },
        computed: {},
        methods: {},
        mounted() {
        },
    }
</script>

<style lang="scss">
    .v-main-wrapper {
        display: flex;
    }
</style>