<template>
    <header class="header">
        <nav class="header__nav">
            <ul class="header__nav-list">
                <li class="header__nav-item">
                    <router-link class="header__nav-url" to="/">Главная</router-link>
                </li>
                <li class="header__nav-item">
                    <router-link class="header__nav-url" to="/catalog">Каталог</router-link>
                </li>
                <li class="header__nav-item">
                    <router-link class="header__nav-url" to="/kotli">Котлы</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script></script>

<style lang="scss" scoped>
    .header {
        display: flex;
        .header__nav {
            display: flex;
            .header__nav-list {
                display: flex;
                justify-content: space-between;

                .header__nav-item {
                    list-style: none;
                }
            }
        }
    }
</style>