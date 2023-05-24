<template>
    <div>
        <h1 class="">CATALOG ROUTER</h1>
        <div class="catalog__container">
            <router-link class="catalog__category" to="/kotli">КОТЛЫ</router-link>
            <router-link class="catalog__category" to="/kolonki">КОЛОНКИ</router-link>
            <router-link class="catalog__category" to="/kotli">БОЙЛЕРЫ</router-link>
            <router-link class="catalog__category" to="/kotli">РАДИАТОРЫ</router-link>
        </div>
    </div>
</template>

<script>


    export default {
        components: {
            
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
            console.log('HI WOW')
        },
    }
</script>

<style lang="scss">
    .v-main-wrapper {
        display: flex;
    }
    .catalog__container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .catalog__category {
            display: flex;
            max-width: 48%;
            width: 100%;
            margin-bottom: 30px;
            height: 300px;
            background-color: aquamarine;
            align-items: center;
            justify-content: center;
            font-size: 25px;
        }
    }

</style>