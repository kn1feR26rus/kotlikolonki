<template>
    <div>
        <section class="banner">
            <div class="banner__box">
                <h1 class="banner__title">
                    Котлы Колонки
                </h1>
                <p class="banner__text">
                    Самый недежный поставщик
                </p>
            </div>
        </section>
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

.banner {
    width: 100%;
    height: 100vh;
    background-image: url('@/assets/images/catalog-banner.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    background-position: right;
    background-attachment: fixed;
    
    .banner__box {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 230px;
        left: 100px;
        .banner__title {
            color: white;
            font-size: 60px;
            margin-bottom: 15px;
        }
        .banner__text {
            color: white;
            font-size: 35px;
        }
    }
}
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