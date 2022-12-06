<template>
  <div>
    <Aduio v-if="$route.meta.floatBall"></Aduio>
    <TopNavBar></TopNavBar>
    <Header v-if="$route.meta.show"></Header>
    <router-view></router-view>
    <Footer v-if="$route.meta.show"></Footer>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style lang="less"></style>
