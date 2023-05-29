<template>
  <div class="container">
    <v-header></v-header>
    <keep-alive>
      <div class="wrapper">
        <router-view></router-view>
      </div>
    </keep-alive>
  </div>
</template>

<script>

import vHeader from '@/components/v-header'

export default {
  name: 'App',
  components: {
    vHeader
  }
}
</script>

<style>

</style>
