<template>
    <div class="catalog__item">
        <img :src="require('../assets/images' + product_data.img)" alt="">
            <p>{{ product_data.name }}</p>
            <button>Подробнее</button>
            <button>Узнать цену</button>
    </div>
</template>

<script>
export default {
    name: "v-catalog-item",
    props: {
        product_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {}
    }
}
</script>

<style lang="scss">
$radius: 8px;
    .catalog__item {
        display: flex;
        flex-direction: column;
        padding: 15px 20px;
        border-radius: $radius;
        border: 1px solid red;
        max-width: 30%;
        width: 100%;
        margin-bottom: 20px;
        box-sizing: border-box;
        align-items: center;

        img {
            height: 250px;
            margin-bottom: 20px;
        }

        p {
            margin-bottom: 15px;
            margin-bottom: 20px;
        }

        button {
            border: 1px solid red;
            background: red;
            color: white;
            border-radius: $radius;
            padding: 10px 35px;
            cursor: pointer;
            margin-bottom: 20px;
        }
    }
</style>