<script lang='ts' setup>
import { Tabbar, TabbarItem } from 'vant'
import { ref, watch } from 'vue'
import { RouterView, useRoute, useRouter } from 'vue-router'


const route = useRoute()
const router = useRouter()
const activeBar = ref(route.name as string)
watch(activeBar, (newBar) => {
  router.push({ name: newBar })
})
</script>
<template>
  <RouterView />
  <Tabbar v-model='activeBar'>
    <TabbarItem icon='home-o' name='home'>首页</TabbarItem>
    <TabbarItem icon='shop-o' name='order'>订单</TabbarItem>
    <TabbarItem icon='friends-o' name='me'>我的</TabbarItem>
  </Tabbar>
</template>
<style scoped>

</style>