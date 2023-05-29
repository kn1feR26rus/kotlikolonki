<template>
    <main class="main">
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
        <section class="catalog">
            <h2 class="catalog__title">Каталог</h2>
            <div class="catalog__container">
                <router-link class="catalog__category category1" to="/kotli">
                    <img src="@/assets/images/test1.webp" alt="" class="catalog__item-img">
                    <span class="catalog__item-text">Котлы</span>
                </router-link>

                <router-link class="catalog__category category1" to="/kotli">
                    <img src="@/assets/images/test321.jpg" alt="" class="catalog__item-img">
                    <span class="catalog__item-text">Колонки</span>
                </router-link>

                <router-link class="catalog__category category1" to="/kotli">
                    <img style="width: 88%;" src="@/assets/images/test123.png" alt="" class="catalog__item-img">
                    <span class="catalog__item-text">Бойлеры</span>
                </router-link>

                <router-link class="catalog__category category1" to="/kotli">
                    <img src="@/assets/images/test1.webp" alt="" class="catalog__item-img">
                    <span class="catalog__item-text">Шляпка</span>
                </router-link>
            </div>
            <router-link class="catalog__all" to="/catalog">
                <span class="catalog__item-text">Вся продукция</span>
            </router-link>
        </section>
        <section class="about">
            <h2 class="about__title">О компании</h2>
            <div class="about__container">
                <div class="about__box">
                    <a class="about__item">
                        <div class="about__item-bg"></div>
                        <h3 class="about__item-text"><span>100 </span><br> лет</h3>
                    </a>
                    <a class="about__item">
                        <div class="about__item-bg"></div>
                        <h3 class="about__item-text"><span>100 </span><br> лет</h3>
                    </a>
                    <a class="about__item">
                        <div class="about__item-bg"></div>
                        <h3 class="about__item-text"><span>100 </span><br> лет</h3>
                    </a>
                    <a class="about__item">
                        <div class="about__item-bg"></div>
                        <h3 class="about__item-text"><span>100 </span><br> лет</h3>
                    </a>
                </div>
                <img src="@/assets/images/about-banner.webp" alt="" class="about__img">
            </div>
        </section>
        <section class="partners">
            <h2 class="partners__title">Наши партнеры</h2>
            <div class="partners__container">
                <img src="@/assets/images/partners/ital.png" class="partners__img" alt="partners__img">
                <img src="@/assets/images/partners/baxi.png" class="partners__img" alt="partners__img">
                <img src="@/assets/images/partners/ariston.svg" class="partners__img" alt="partners__img">
                <img src="@/assets/images/partners/navien.svg" class="partners__img" alt="partners__img">
                <img src="@/assets/images/partners/zanunssi.svg" class="partners__img" alt="partners__img">
            </div>
        </section>
    </main>
</template>

<script>
    
</script>

<style lang="scss" scoped>
    .banner {
        width: 100%;
        height: 100vh;
        background-image: url('@/assets/images/main-banner.webp');
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
    .catalog, .about {
        display: flex;
        flex-direction: column;
        margin: 20px auto;

        .catalog__title {
            text-align: left;
            color: rgb(61, 131, 212);
            font-size: 35px;
            margin: 0 0 40px 20px;
            padding-bottom: 20px;
            border-bottom: 3px solid rgb(61, 131, 212);
            width: 60%;
        }
        .catalog__all {
            background-color: rgb(61, 131, 212);
            border-radius: 15px;
            color: white;
            text-decoration: none;
            display: flex;
            width: 300px;
            height: 50px;
            justify-content: center;
            align-items: center;
            margin: 30px auto;
            font-size: 25px;
            transition: all .5s;
        }
        .catalog__all:hover {
            transform: scale(1.07);
        }

        .catalog__container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            flex-direction: row;
    
            .catalog__category {
                display: flex;
                flex-direction: column;
                width: 350px;
                height: 420px;
                align-items: center;
                justify-content: space-around;
                font-size: 25px;
                position: relative;
                border-radius: 10px;
                background-color: rgb(61, 131, 212);
                text-decoration: none;
                transition: all .5s;
            }

            .catalog__item-img {
                width: 50%;
                transform: translate(0, 0);
                transition: transform 400ms ease-in-out;
                filter: drop-shadow(5px 10px 15px rgba(8, 9, 13, 0.4));
            }

            .catalog__item-text {
                color: white;
                text-decoration: none;
                position: relative;
            }

            .catalog__item-text::after {
                display: block;
                position: absolute;
                left: 0; 
                width: 0;
                height: 2px; 
                background-color: white; 
                content: "";
                transition: width 0.3s ease-out;
            }
            .catalog__category:hover .catalog__item-text:after {
                width: 100%; 
            }
            
            .catalog__category:hover {
                background-color: rgb(40, 108, 186);
            }

            .catalog__category:hover .catalog__item-img {
                transform: translate(-1.5rem, -2rem) rotate(-15deg);
            }
        }
    }
    .about {
        .about__title {
            text-align: left;
            color: rgb(61, 131, 212);
            font-size: 35px;
            margin: 0 0 40px 20px;
            padding-bottom: 20px;
            border-bottom: 3px solid rgb(61, 131, 212);
            width: 60%;
        }

        .about__container {
            display: flex;
            justify-content: space-around;
            align-items: center;

            .about__box {
                width: 48%;
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;

                .about__item {
                    width: 48%;
                    height: 200px;
                    position: relative;
                    border-radius: 15px;
                    box-shadow: 0px 3px 16px 0px rgb(0 0 0 / 10%);
                    margin-bottom: 20px;

                    .about__item-bg {
                        position: absolute;
                        left: 0;
                        top: 0;
                        height: 100%;
                        width: 10px;
                        background-color: rgb(61, 131, 212);
                        border-radius: 15px 0 0 15px;
                        transition: all .7s;
                    }
                    .about__item-text {
                        display: flex;
                        justify-content: center;
                        height: 100%;
                        align-items: center;
                        color: rgb(61, 131, 212);
                        font-size: 25px;
                        flex-direction: column;
                        transition: all 1.2s;
                        span {
                            font-size: 40px;
                        }
                    }
                }
                .about__item:hover .about__item-bg {
                    width: 100%;
                    border-radius: 15px;
                }
                .about__item:hover .about__item-text {
                    color: white;
                    position: relative;
                }

            }
            .about__img {
                width: 48%;
                border-radius: 15px;
                height: 430px;
            }
        }
    }
    .partners {
        padding-bottom: 50px;
        .partners__title {
            text-align: left;
            color: rgb(61, 131, 212);
            font-size: 35px;
            margin: 0 0 40px 20px;
            padding-bottom: 20px;
            border-bottom: 3px solid rgb(61, 131, 212);
            width: 60%;
        }

        .partners__container {
            display: flex;
            justify-content: space-around;
            align-items: center;

            .partners__img {
                width: 120px;
            }
        }
    }
</style>