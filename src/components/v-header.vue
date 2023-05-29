<template>
    <header class="header" ref="headRef">
        <router-link class="header__nav-url" to="/">
            <img src="@/assets/images/test-logo.png" alt="header-logo" class="header__logo">
        </router-link>
        <nav class="header__nav">
            <ul class="header__nav-list">
                <li class="header__nav-item">
                    <router-link class="header__nav-url" to="/">Главная</router-link>
                </li>
                <li class="header__nav-item">
                    <router-link class="header__nav-url" to="/catalog">Каталог</router-link>
                </li>
                <li class="header__nav-item">
                    <router-link class="header__nav-url" to="/kotli">О нас</router-link>
                </li>
                <li class="header__nav-item">
                    <router-link class="header__nav-url" to="/kotli">Отзывы</router-link>
                </li>
                <li class="header__nav-item">
                    <router-link class="header__nav-url" to="/kotli">Контакты</router-link>
                </li>
            </ul>
        </nav>
        <div class="header__social">
            <a href="" class="header__phone">8 800 250 25 25</a>
            <span class="header__time">Пн-Пт: 9:00–19:00</span>
            <div class="header__items">
                <a href="" class="header__item whats"></a>
                <a href="" class="header__item telega"></a>
            </div>
        </div>
    </header>
</template>

<script>
  export default {
    methods: {
      vueOnScroll() {
        var prev = window.pageYOffset;
        const refs = this.$refs.headRef;
        window.addEventListener("scroll", () => {
          var curr = window.pageYOffset;
          console.log(curr)
          if (prev > curr) {
            refs.classList.add("header__scrolled");
            refs.classList.remove("header__scrollDown");
          } else {
            refs.classList.add("header__scrollDown");
            refs.classList.remove("header__scrolled");
          }
          if (curr === 0) {
            refs.classList.remove("header__scrollDown");
            refs.classList.remove("header__scrolled");
          }
            prev = curr;
        });
      },
    },
    mounted() {
      // run the function when the component's mount
      this.vueOnScroll();
    }
  }
</script>

<style lang="scss" scoped>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100px;
        background-color: rgba(255, 255, 255, .0);
        position: fixed;
        max-width: 1600px;
        width: 100%;
        padding: 0 40px;
        z-index: 2;
        transition: all .7s;

        .header__social {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: right;
            align-items: flex-end;

            .header__items {
                display: flex;

                .header__item {
                    width: 30px;
                    height: 30px;
                    background-repeat: no-repeat;
                    background-size: contain;
                }
                .whats {
                    background-image: url('@/assets/images/header__whats.png');
                }
                
                .telega {
                    background-image: url('@/assets/images/header__telega.png');
                    margin-left: 10px;
                }
            }

            .header__phone, .header__time {
                margin-bottom: 5px;
                text-decoration: none;
                color: white;
                font-size: 18px;
            }
        }
        .header__logo {
            width: 100px;
        }
        .header__nav {
            display: flex;
            max-width: 40%;
            width: 100%;
            .header__nav-list {
                display: flex;
                justify-content: space-between;
                width: 100%;

                .header__nav-item {
                    list-style: none;
                    
                    .header__nav-url {
                        text-decoration: none;
                        color: white;
                        font-size: 20px;
                        position: relative;
                        line-height: 1;
                    }
                }
            }
        }
    }
    .header__scrollDown {
        opacity: 0;
    }
    .header__scrolled {
        opacity: 1;
        background-color: rgb(40, 108, 186);
    }
</style>