<template>
    <div>
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

<style lang="scss" scoped>
    .catalog__container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        flex-direction: row;

        .catalog__category {
            display: flex;
            max-width: 23%;
            width: 100%;
            margin-bottom: 30px;
            height: 300px;
            align-items: center;
            justify-content: center;
            font-size: 25px;
            border: 1px solid blue;
            border-radius: 8px;
        }
    }

</style>